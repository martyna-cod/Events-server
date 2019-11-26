const Sequelize = require('sequelize')
const sequelize = require('../db')

const Ticket = sequelize.define('ticket', { 
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.STRING,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {
  timestamps: false,
  tableName: 'tickets'
})

//Ticket.belongsTo(User)
//Ticket.belongsTo(Event)

module.exports = Ticket