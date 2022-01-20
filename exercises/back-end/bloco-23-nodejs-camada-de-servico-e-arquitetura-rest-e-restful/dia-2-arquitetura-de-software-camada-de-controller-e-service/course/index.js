const express = require('express');
const bodyParser = require('body-parser')

const Author = require('./controllers/Author');
const Book = require('./models/Book');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/authors', Author.getAll)
app.get('/authors/:id', Author.findById)
app.post('/authors', Author.create)

app.get('/books', async (_req, res) => {
  const book = await Book.getAll();

  res.status(200).json(book);
})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);

  if(!book) return res.status(404).json({'message': 'not found'});

  res.status(200).json(book);
})

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if (!await Book.isValid(title, author_id)) return res.status(400).json({ message: 'Dados inválidos' })

  await Book.create(title, author_id) 
    res.status(201).json({ message: 'Livro criado com sucesso! '});
})



app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});