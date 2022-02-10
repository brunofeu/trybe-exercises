const fs = require('fs').promises;

const writeData = async (fileName, text) => {
  await fs.writeFile(fileName, text, 'utf8').catch('pedido inválido');
  return 'ok';

}

module.exports = writeData;

// writeData('arquivo.txt', 'lorem ipsum')
//   .then(result => console.log(result))
//   .catch(err => console.log(err));