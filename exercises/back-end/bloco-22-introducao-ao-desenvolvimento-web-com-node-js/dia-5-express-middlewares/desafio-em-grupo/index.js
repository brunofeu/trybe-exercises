const app = require('express')();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const ping = require('./middlewares/ping')
const hello = require('./middlewares/hello')
const greeting = require('./middlewares/greeting');
const getSimpsons = require('./middlewares/getSimpsons');
const getSimpsonById = require('./middlewares/getSimpsonById' )
const createSimpson = require('./middlewares/createSimpson');
const validateIdSimpson = require('./middlewares/validateIdSimpson');
const validateNameSimpson = require('./middlewares/validateNameSimpson');

app.get('/ping', ping);
app.post('/hello', hello);
app.post('/greeting', greeting)
app.get('/simpsons', getSimpsons);
app.get('/simpson/:id', getSimpsonById);
app.post('/simpsons',validateIdSimpson, validateNameSimpson, createSimpson);

app.listen(3000, () => { console.log('Ouvindo na porta 3000')});