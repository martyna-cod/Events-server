const Sequelize = require('sequelize')
const sequelize = require('../db')
const User = require('../user/model')
//const Event = require('../event/model')


const Ticket = sequelize.define('ticket', { 
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {
  timestamps: false,
  tableName: 'tickets'
})


Ticket.belongsTo(User)
User.hasMany(Ticket)
//User.belongsTo(Event)

module.exports = Ticket