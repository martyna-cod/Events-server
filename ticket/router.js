const { Router } = require("express");
const Ticket = require("./model");

const router = new Router();

router.get("/ticket", (req, res, next) => {
	Ticket.findAll()
		.then(ticket => {
			res.json(ticket);
		})
		.catch(next);
});


router.post("/event/:eventId/ticket", (req, res, next) => {
	Ticket.create({
		description: req.body.description, 
		price: req.body.price, 
		author: req.body.author, 	
		eventId: req.params.eventId })
		.then(ticket => res.json(ticket))
		.catch(err => next(err));
});






	
module.exports = router;