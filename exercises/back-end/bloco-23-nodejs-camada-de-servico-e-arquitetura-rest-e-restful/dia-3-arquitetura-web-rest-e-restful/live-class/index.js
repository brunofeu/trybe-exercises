const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.json({ok: true}))

app.use('/pessoas', require('./controllers/peopleController'));

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))