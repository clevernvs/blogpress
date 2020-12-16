const Sequelize = require('sequelize');

const connection = new Sequelize('blogpress', 'root', '123456', {
  hots: 'localhost',
  dialect: 'mysql',
  timezone: '-03:00'
});

module.exports = connection;

