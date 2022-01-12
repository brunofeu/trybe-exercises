const app = require('express')();
const bodyParser = require('body-parser')

app.use(bodyParser.json());

const { getSimpsons, addSimpsons } = require('./utils');

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

app.get('/simpsons', async (_req, res) => {
  const simpsons = await getSimpsons();
  res.status(200).json(simpsons);
})

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  const simpsons = await getSimpsons();
  const selectedSimpson = simpsons.find((char) => char.id === id)
  if (!selectedSimpson) return res.status(404).json({ message: 'simpson not found' })
  res.status(200).json(selectedSimpson);
})

app.post('/simpsons', async (req, res) => { //http POST :3001/simpsons id=20 name=vovô
  const simpsons = await getSimpsons();
  const { id, name } = req.body;
  const checkSimpsons = simpsons.find((char) => char.id === id)
  if (checkSimpsons) return res.status(409).json({ message: 'id already exists' })
  simpsons.push({ id: id, name});
  addSimpsons(simpsons)
  res.status(204).end();
})