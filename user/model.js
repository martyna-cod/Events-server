const Sequelize = require('sequelize')
const sequelize = require('../db')
//const Event = require('../event/model')

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {
  timestamps: false,
  tableName: 'users'
})

//Event.belongsTo(User)
//User.hasMany(Event)

module.exports = User