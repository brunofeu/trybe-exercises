// 8 - Desafio
const fs = require('fs').promises

module.exports = async (req, res, next) => {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8').then(response => JSON.parse(response));
  
  const { name } =req.body;

  if (!name && name === '') return res.status(500).json({message: 'Nome é obrigatório'})

  next();
}