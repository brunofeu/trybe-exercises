const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: "localhost",
  user:"feu",
  password: "trybe123",
  database:"rest_exercicios"
})

module.exports = connection;