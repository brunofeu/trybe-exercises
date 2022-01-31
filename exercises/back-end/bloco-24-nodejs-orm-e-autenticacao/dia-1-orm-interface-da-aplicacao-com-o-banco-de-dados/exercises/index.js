const app = require('express')();
const bodyParser = require('body-parser');

const bookController = require('./controllers/bookController');

app.use(bodyParser.json());

app.use('/book', bookController);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`))