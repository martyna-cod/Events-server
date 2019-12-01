const { Router } = require("express");
const Event = require("./model");
const Ticket = require("../ticket/model");
const User = require("../user/model");
const auth = require("../auth/middleWare");
const {toData} = require("../auth/jwt");

const router = new Router();

router.get("/event", (req, res, next) => {
  Event.findAll({ include: [Ticket, User] })
    .then(event => {
      res.json(event);
    })
    .catch(next);
});

router.post("/event", auth, (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  const data = toData(token);
  const userId = data.userId;

  Event.create({
    name: req.body.name,
    description: req.body.description,
    picture: req.body.picture,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    userId: userId
  })
    .then(event => res.json(event))
    .catch(err => next(err));
});


router.get("/event/:eventId", (req, res, next) => {
  Event.findByPk(parseInt(req.params.eventId))
    .then(event => res.send({ event }))
    .catch(next);
});

module.exports = router;
