const express = require('express');

const Author = require('./modules/Author');
const Book = require('./modules/Book');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
})

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if(!author) return res.status(404).json({'message': 'not found'});

  res.status(200).json(author);
})

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



app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});