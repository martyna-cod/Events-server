const Sequelize = require('sequelize')
const sequelize = require('../db')
const Ticket = require("../ticket/model");
const User = require('../user/model')


const Comment = sequelize.define('comment', {
  text: {
    type: Sequelize.STRING,
    allowNull: false
  },
},{
  timestamps: false,
  tableName: 'comments'
})

Ticket.hasMany(Comment)
Comment.belongsTo(Ticket)
User.hasMany(Comment)
Comment.belongsTo(User)



module.exports = Comment