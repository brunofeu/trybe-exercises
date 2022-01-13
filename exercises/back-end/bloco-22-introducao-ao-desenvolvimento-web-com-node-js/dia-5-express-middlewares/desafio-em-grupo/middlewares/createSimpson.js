const fs = require('fs').promises;

module.exports = async (req, res) => {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8').then(response => JSON.parse(response));

  const { id, name } = req.body;
  simpsons.push({ id, name });

  await fs.writeFile('./simpsons.json', JSON.stringify(simpsons))
  res.status(201).json({message: 'Simpson criado com sucesso!'});
}