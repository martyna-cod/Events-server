const Sequelize = require('sequelize')
const sequelize = require('../db')
const Ticket = require("../ticket/model");
const User = require('../user/model')


const Event = sequelize.define('event', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  picture: {
    type: Sequelize.STRING,
    allowNull: false
  },
  start_date: {
    type: Sequelize.DATE,
    allowNull: true
  },
  end_date: {
    type: Sequelize.DATE,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'events'
})

Event.hasMany(Ticket);
Ticket.belongsTo(Event);
Event.belongsTo(User)
User.hasMany(Event)


module.exports = Event