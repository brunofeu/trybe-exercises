const fs = require('fs').promises;

const getSimpsons = async () => {
  const simpsons = await fs.readFile('simpsons.json', 'utf-8')
    .then(result => JSON.parse(result));
  return simpsons;
}

const addSimpsons = async (character) => {
  const simpsons = await fs.writeFile('simpsons.json', JSON.stringify(character), 'utf8');
  return simpsons;
}

module.exports = { getSimpsons, addSimpsons};

