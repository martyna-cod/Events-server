const { Router } = require("express");
const Ticket = require("./model");
const auth = require('../auth/middleWare')

//const Comment = require('../comments/model')

const router = new Router();

router.get("/ticket/:ticketId", (req, res, next) => {
	Ticket.findOne({where : { id: req.params.ticketId }})
		.then(ticket => {
			if (!ticket) {
				res.status(404).end();
			} else {
				res.status(201).json(ticket);
			}
			res.json(ticket);
		})
		.catch(error => next(error));
});

router.get("/event/:eventId/ticket", (req, res, next) => {
	Ticket.findAll({ where: { eventId: req.params.eventId }})
		.then(ticket => res.json( ticket ))
		.catch(next);
});

router.post("/event/:eventId/createticket",  (req, res, next) => {

//console.log(user, "usseeeeeeeeeer")
	Ticket.create({
		description: req.body.description, 
		price: req.body.price, 
		userId: req.body.userId,
		eventId: req.params.eventId, }) 
		
		.then(ticket => res.json(ticket))
		.catch(err => next(err));
});




module.exports = router