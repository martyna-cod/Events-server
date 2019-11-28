const { Router } = require("express");
const Comment = require("./model");
const Ticket = require('./model')

const router = new Router();

router.get("/comment", (req, res, next) => {
	Comment.findAll()
		.then(comment => {
			res.json(comment);
        })
        .catch(next);
});

router.post("/ticket/:ticketId/comment", (req, res, next) => {
	Comment.create({
		text: req.body.text, 
		author: req.body.author, 	
		ticketId: req.params.ticketId, })
		.then(comment => res.json(comment))
		.catch(err => next(err));
});


module.exports = router