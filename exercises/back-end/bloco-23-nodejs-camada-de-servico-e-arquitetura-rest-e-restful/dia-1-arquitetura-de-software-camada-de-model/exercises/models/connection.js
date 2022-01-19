const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'feu',
  password: 'trybe123',
  host: 'localhost',
  database: 'users_crud'
});

module.exports = connection;