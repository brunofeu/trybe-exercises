const fs = require('fs').promises;

const splitObject = (result) => {
  const resultJson = JSON.parse(result)
  resultJson.map(({id, name}) => console.log(`${id} - ${name}`))
}

const main = async () => {
  const result = await fs.readFile('./simpsons.json', 'utf8');
  splitObject(result)
  // console.log(result)
}

// main();

const checkId = async (id) => {
  const result = await fs.readFile('./simpsons.json', 'utf8').then((resultJson) => JSON.parse(resultJson));

  const selectedCharacter = result.find((character) => character.id === id )

  if (!selectedCharacter) throw new Error ('id não encontrado')
  
  return selectedCharacter;

}

// checkId('2')
//   .then(result => console.log(result.name))
//   .catch(error => console.log(error));

const removeIds = async (id) => {
  const result = await fs.readFile('./simpsons.json', 'utf8').then((resultJson) => JSON.parse(resultJson));
  
  const removeSimpson = result.filter((character) => character.id !== id[0] && character.id !== id[1])

  fs.writeFile('simpsons.json', JSON.stringify(removeSimpson), 'utf8')

  // console.log(removeSimpson)
}

removeIds(['10', '6']);