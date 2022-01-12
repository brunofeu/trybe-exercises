const app = require('express')();

const simpsons = require('./simpsons.json');

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

app.get('/simpsons', (_req, res) => {
  res.status(200).json(simpsons);
})

app.get('/simpsons/:id', (req, res) => {
  const { id } = req.params;
  const selectedSimpson = simpsons.find((char) => char.id === id)
  if (!selectedSimpson) return res.status(404).json({ message: 'simpson not found' })
  res.status(200).json(selectedSimpson);
})