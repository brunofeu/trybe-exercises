const app = require('express')();
const bodyParser = require('body-parser');

const User = require('./models/User');

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.post('/user', async  (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!User.isValid(firstName, lastName, email, password)) {
    return res.status(400).json({message: 'dados inválidos'})
  };

  const user = await User.create(firstName, lastName, email, password);
  res.status(201).json(user)
})

app.get('/user', async (_req, res) => {
  const users = await User.getAll();
  res.status(200).json(users)
})

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) return res.status(404).json( {"error": true, "message": "Usuário não encontrado"})
  res.status(200).json(user)
})

app.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  if (!User.isValid(firstName, lastName, email, password)) {
    return res.status(400).json({message: 'dados inválidos'})
  };

  const updateUser = await User.updateUser(firstName, lastName, email, password, id);

  if (!updateUser) return res.status(404).json( {"error": true, "message": "Usuário não encontrado"})
  res.status(201).json({id, firstName, lastName, email})

})

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});