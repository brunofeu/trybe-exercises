const app = require('express')();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const ping = require('./middlewares/ping')
const hello = require('./middlewares/hello')
const greeting = require('./middlewares/greeting');
const getSimpsons = require('./middlewares/getSimpsons');
const createSimpson = require('./middlewares/createSimpson');

app.get('/ping', ping);
app.post('/hello', hello);
app.post('/greeting', greeting)
app.get('/simpsons', getSimpsons);
app.post('/simpsons', createSimpson);

app.listen(3000, () => { console.log('Ouvindo na porta 3000')});