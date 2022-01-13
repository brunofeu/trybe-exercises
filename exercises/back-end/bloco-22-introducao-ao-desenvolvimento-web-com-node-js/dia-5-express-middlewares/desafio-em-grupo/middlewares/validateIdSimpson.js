// 7 - Desafio
const fs = require('fs').promises

module.exports = async (req, res, next) => {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8').then(response => JSON.parse(response));
  
  const { id } =req.body;

  const simpson = simpsons.find((simpson => simpson.id === +id))
  if (simpson) return res.status(500).json({message: 'Não é possível cadastrar esse simpson!'})

  next();
}