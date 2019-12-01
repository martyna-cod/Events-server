const { Router } = require("express");
const Comment = require("./model");
const Ticket = require('./model')
const auth = require('../auth/middleWare')
const User = require('../user/model')
const { toData } = require('../auth/jwt')

const router = new Router();

//Wszystkie komantarze
router.get("/comment", (req, res, next) => {
	Comment.findAll({include: [User]})
		.then(comment => {
			res.json(comment);
        })
        .catch(next);
});

router.post("/ticket/:ticketId/comment", auth, (req, res, next) => {
	const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  const data = toData(token);
  const userId = data.userId;
	Comment.create({
		text: req.body.text, 
		ticketId: req.params.ticketId,
	userId: userId })
		.then(comment => res.json(comment))
		.catch(err => next(err));
});


module.exports = router