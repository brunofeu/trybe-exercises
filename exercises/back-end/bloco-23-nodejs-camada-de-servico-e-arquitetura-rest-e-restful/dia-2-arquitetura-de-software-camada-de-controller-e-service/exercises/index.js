require('dotenv').config();

const cepController = require('./controllers/cepController');

const app = require('express')();
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/cep/:cep', cepController.getCep)



app.post('/cep', async (req, res) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const checkData = isValid({ cep, logradouro, bairro, localidade, uf })

  if (!checkData) res.status(400).json({ error: { "code": "invalidData", "message": "<mensagem do Joi>" } })

  // console.log(checkData)
  await cepModel.addCep({ cep, logradouro, bairro, localidade, uf })
  res.status(201).json({ cep, logradouro, bairro, localidade, uf })
})


const PORT = process.env.PORT || 3000;
  
app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});