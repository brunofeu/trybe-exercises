const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

app.get('/ping', (_req, res) => {
  res.status(200).json({message: 'pong' })
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  // http POST :3001/hello name=Bruno       
  res.status(200).json({"message": `Hello, ${name}!`}) 
})

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  
  // http POST :3001/greetings name=Bruno age=32
  if( age > 17 ) return res.status(200).json({"message": `Hello, ${name}!`}) 
  
  //http POST :3001/greetings name=Bruno age=17
  return res.status(401).json({ "message": "Unauthorized" }) 
})

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  //http PUT :3001/users/Bruno/20
  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
})