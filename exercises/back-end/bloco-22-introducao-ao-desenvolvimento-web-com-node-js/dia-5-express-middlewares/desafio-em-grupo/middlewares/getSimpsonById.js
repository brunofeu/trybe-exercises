// 5 - Desafio
const simpsons = require('../simpsons.json');

module.exports = (req, res) => {
  const { id } = req.params;
  const checkSimpson = simpsons.find((simpson) => simpson.id === +id)
  if (!checkSimpson) return res.status(404).json({ message: 'Simpson not found!'})
  
  res.status(200).json(checkSimpson);
};