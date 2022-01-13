// 4 - Desafio
const simpsons = require('../simpsons.json')

module.exports = (req, res) => {
  res.status(200).json(simpsons);
};