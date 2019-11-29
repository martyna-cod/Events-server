const { Router } = require("express");
const Comment = require("./model");
const Ticket = require('./model')
const auth = require('../auth/middleWare')

const router = new Router();

//Wszystkie komantarze
router.get("/comment", (req, res, next) => {
	Comment.findAll()
		.then(comment => {
			res.json(comment);
        })
        .catch(next);
});

router.get("/comment/:commentId", (req, res, next) => {
	Comment.findOne({where : { id: req.params.commentId }})
		.then(comment => {
			if (!comment) {
				res.status(404).end();
			} else {
				res.status(201).json(comment);
			}
			res.json(ticket);
		})
		.catch(error => next(error));
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