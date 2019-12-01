//const { Router } = require("express");
const Ticket = require("./model");
const auth = require('../auth/middleWare')
const Comment = require('../comments/model')
const {toData} = require('../auth/jwt')
const router = require('express-promise-router')();		


router.get("/ticket/:ticketId", async (req, res, next) => {
	const ticket = await Ticket.findOne({where : { id: req.params.ticketId }, include: [Comment]})
	const hasManyComments = (comments) => {
		let risk = 0;
		//console.log(comments, "comments")
		if (comments.length > 3)
		  return risk += 5;
		return risk;
	  }
	const ticketsForTheSameEvent = await Ticket.findAll({ where: {eventId: ticket.eventId}})
	const { price, comments } = ticket
	const tickets = ticketsForTheSameEvent
	const ticketsPrices = tickets.map(ticket =>
		ticket.price)
	const averagePrice = ticketsPrices.reduce((prev, current) => {
		return prev + current
	 }, 0) / ticketsPrices.length
console.log(averagePrice, "aberagePrice")
	const isCheaper = (ticket, averagePrice) => {
		let risk = 0
		   if(ticket.price < averagePrice) {
		   const difference = (averagePrice - ticket.price)
			 // how much cheaper our ticket is?
		   return risk += difference * 100 / averagePrice 
		   // (average = 100%, price = x)
		   }else if(ticket.price > averagePrice) {
			   const difference = ticket.price - averagePrice 
			   return risk -= difference * 100 / averagePrice
		   } console.log(ticket.price, "TIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIICKETPRICE")
		   return risk;
		 }
		 console.log(averagePrice, "averagePrice")
		 console.log(ticket.price , "ticket.pice")

		/*const businnesHrs = (timestamp) => {
			let result = 0;
			if(ticket.timestamp)
			
			return result;
		  }*/

	//console.log("Same event tickeeeeeeeets", ticketsForTheSameEvent) // tickety dla konkretntego eventu
	const ticketOfUser = await Ticket.findAll({ where: {userId: ticket.userId}})
	//console.log("USSSEEER TICKETS", ticketOfUser)
	//console.log("JEDNEEEEGO USERA", ticketOfUser)		//--wszystkie tickety zalogowanego usera 
	const onlyTicket = (ticketOfUser) => {
		let risk = 0;
		return ticketOfUser.length === 1 ? risk += 10 : risk;
	  }
	  console.log(ticketOfUser, "ticketofUser")
	  const accurateRisk = (risk) => {
		if (risk > 95)
		  return risk = 95
		if (risk < 5)
		  return risk = 5
		else return Math.round(risk)
	  }
	
	
    let risk = 0
	  + onlyTicket(ticketOfUser)
	  + isCheaper(ticket, averagePrice)
	  + hasManyComments(comments)


  	  let finalRisk = accurateRisk(risk);
		ticket.update({
			risk: finalRisk
		  }).then(() => {})
		  console.log("tickeeeeeeeeeeeet", ticket)
    	return {
	  finalRisk,
	  ticket,
	   }
	   
	})

	
	

  

router.post("/event/:eventId/createticket", auth, (req, res, next) => {
	const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  const data = toData(token);
  const userId = data.userId;
	Ticket.create({
		description: req.body.description, 
		price: req.body.price, 
		userId: userId,
		eventId: req.params.eventId, }) 
		
		.then(ticket => res.json(ticket))
		.catch(err => next(err));

		// call fnction ()
		// ten update ticket with the calculated risk
});

router.put("/ticket/:ticketId", (req, res, next) => {
	Ticket.findByPk(parseInt(req.params.ticketId))
	  .then(ticket => ticket.update(req.body))
	  .then(ticket => res.send(ticket))
	  .catch(next);
  });

  router.get("/event/:eventId/ticket", (req, res, next) => {
	Ticket.findAll({ where: { eventId: req.params.eventId }})
		.then(ticket => res.json( ticket ))
		.catch(next);
});

module.exports = router

/**
 * 
 * Todo:
 * 
 * |||||||||||| Endpoints should use auth
 * |||||||||||| - Change database structure to use userId (comments) 
 * |||||||||||| - Make sure ticketList does not crash
 * - Calculate risk, display
 */

