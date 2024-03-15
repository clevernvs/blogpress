import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// const connection = new Sequelize('blogpress', 'root', '123456', {
const connection = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  // host: 'localhost',
  // dialect: 'mysql',
  // timezone: '-03:00'
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
  timezone: '-03:00'
});

export default connection;

