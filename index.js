const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRouter = require("./auth/router");
const userRouter = require("./user/router");
const eventRouter = require('./event/router')
const User = require("./user/model");
const Event = require('./event/model')
const Ticket = require('./ticket/model')
const ticketRouter = require('./ticket/router')
const port = process.env.PORT || 4000


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(authRouter);
app.use(userRouter);
app.use(eventRouter)
app.use(ticketRouter)


app.get('/', (req, res) => res.send("Good morning"))
app.listen(port, () => console.log(`Listening on port ${port}`))