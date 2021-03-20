const dotenv = require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 3001,
    DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/food',
    NODE_ENV: process.env.NODE_ENV || 'development',
  }