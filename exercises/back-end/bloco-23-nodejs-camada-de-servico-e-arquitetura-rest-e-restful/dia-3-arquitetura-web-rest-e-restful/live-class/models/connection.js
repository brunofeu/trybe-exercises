module.exports = require('mysql2/promise').createPool({
  host: "localhost",
  user:"feu",
  password: "trybe123",
  database:"rest_aula"
})