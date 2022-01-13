const app = require('express')();

const simpsons = require('../simpsons.json');

// 4 - Desafio

app.get('/simpsons/:id', getSimpsonsByIdMiddleware)

function getSimpsonsByIdMiddleware(req, res) {
  const { id } = req.param;
  const checkSimpsons = simpsons.find((simpson) => simpson.id === +id)
  if (checkSimpsons) 
  res.status(200).json(simpsons);
}

app.listen(3000, () => { console.log('Ouvindo na porta 3000')});

module.exports = getSimpsonsByIdMiddleware;