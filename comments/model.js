const Sequelize = require('sequelize')
const sequelize = require('../db')
const Ticket = require("../ticket/model");
const User = require('../user/model')


const Comment = sequelize.define('comment', {
  text: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
}, 
},{
  timestamps: false,
  tableName: 'comments'
})

Ticket.hasMany(Comment)
Comment.belongsTo(Ticket)



module.exports = Comment