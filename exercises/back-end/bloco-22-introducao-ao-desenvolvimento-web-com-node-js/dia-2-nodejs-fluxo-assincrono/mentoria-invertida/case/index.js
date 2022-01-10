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
            })
          });
        })
      });
    })
  });
}

leitorCallback();
