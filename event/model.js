const Sequelize = require('sequelize')
const sequelize = require('../db')
const Ticket = require("../ticket/model");


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
  date: {
    type: Sequelize.DATE,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'events'
})

Event.hasMany(Ticket);
Ticket.belongsTo(Event);





module.exports = Event