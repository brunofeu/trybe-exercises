require('dotenv').config();
const cepModel = require('./models/cepModel');

const app = require('express')();
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/ping', (req, res) => {
  res.status(200).json({ "message": "pong!" })
})

app.get('/cep/:cep', async (req, res) => {
  const { cep } = req.params;
  const regexCep = /\d{5}-?\d{3}/
  
  if (!regexCep.test(cep)) return res.status(400).json(  { error: { "code": "invalidData", "message": "CEP inválido" } })
  
  const cepData = await cepModel.getCep(cep)

  if (!cepData) return res.status(400).json({ error: { "code": "notFound", "message": "CEP não encontrado" } })

  
    res.status(200).json(cepData)
  })


const PORT = process.env.PORT || 3000;
  
app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});