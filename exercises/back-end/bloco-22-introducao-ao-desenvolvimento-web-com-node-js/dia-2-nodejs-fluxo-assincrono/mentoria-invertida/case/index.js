// callback > promise > async/await
const fs = require('fs');

const leitorCallback = () => {
  fs.readFile('./arquivo1.txt', 'utf-8', (err, content) => {
    if (err) return console.log(err.message);
  
    const arrayDeNomes = (content.split('\n')).map((linha) => linha.split('-'));
    const obj = (Object.fromEntries(arrayDeNomes));
    
    fs.writeFile('./arquivo1.json', JSON.stringify(obj), (err) => {
      if (err) return console.log(err.message);
      
      fs.readFile('./arquivo2.txt', 'utf-8', (err, content) => {
        if (err) return console.log(err.message);
      
        const arrayDeNomes = (content.split('\n')).map((linha) => linha.split('-'));
        const obj = (Object.fromEntries(arrayDeNomes));

        fs.writeFile('./arquivo2.json', JSON.stringify(obj), (err) => {
          if (err) return console.log(err.message);

          fs.readFile('./arquivo3.txt', 'utf-8', (err, content) => {
            if (err) return console.log(err.message);

            const arrayDeNomes = (content.split('\n')).map((linha) => linha.split('-'));
            const obj = (Object.fromEntries(arrayDeNomes));

            fs.writeFile('./arquivo3.json', JSON.stringify(obj), (err) => {
              if (err) return console.log(err.message);
              console.log('todos os arquivos foram salvos corretamente')
            });
          });
        });
      });
    });
  });
};

// leitorCallback();


const leitorPromises = (arquivo, nomeJson) => {
  fs.promises.readFile(arquivo, 'utf-8')
    .then((response) => {
      const obj = Object.fromEntries(response.split('\n').map((linha) => linha.split('-')))
      fs.promises.writeFile(`./${nomeJson}.json`, JSON.stringify(obj))
    })
    .catch((err) => console.log(err))
}

leitorPromises('./arquivo1.txt', 'arquivo1-2');
leitorPromises('./arquivo2.txt', 'arquivo2-2');
leitorPromises('./arquivo3.txt', 'arquivo3-2');
//AJUSTAR UM DEPENDENDO DO OUTRO