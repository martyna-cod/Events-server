const { Router } = require("express");
const Event = require("./model");
const Ticket = require('./model')

const router = new Router();

router.get("/event", (req, res, next) => {
    Event.findAll()

		.then(event => {
			res.json(event);
        })
        .catch(next);
     
});

router.post("/event", (req, res, next) => {
	Event.create({ name: req.body.name, description: req.body.description, picture: req.body.picture, date: req.body.date })
		.then(event => res.json(event))
		.catch(err => next(err));
});

router.put("/event/:eventId", (req, res, next) => {
	Event.findByPk(parseInt(req.params.eventId))
		.then(event => event.update(req.body))
		.then(event => res.send(event))
		.catch(next);
});

router.get("/event/:eventId", (req, res, next) => {
	Event.findByPk(parseInt(req.params.eventId))
		.then(event => res.send({ event }))
		.catch(next);
});

router.delete("/event/:eventId", (req, res, next) => {
	Event.destroy({
		where: {
			id: parseInt(req.params.eventId)
		}
	})
		.then(number => res.send({ number }))
		.catch(next);
});

module.exports = router;