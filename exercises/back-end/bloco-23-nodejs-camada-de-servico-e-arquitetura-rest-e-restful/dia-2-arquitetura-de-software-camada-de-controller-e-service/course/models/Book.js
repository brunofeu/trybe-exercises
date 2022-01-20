const connection = require('./connection');
const Author = require('./Author')

const serialize = (bookData) => ({
id: bookData.id,
title: bookData.title,
authorId: bookData.author_id
});

const getAll = async () => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM books');

  return books.map(serialize);
}

const findById = async (id) => {
  const [bookData] = await connection.execute(
    'SELECT id, title, author_id FROM books WHERE id=?',
    [id]
  );

  if (bookData.length === 0) return null;

  return bookData.map(serialize);
}

const isValid = async (title, authorId) => {
  if (!title || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false

  return true
}

const create = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, authorId]
)

module.exports = {
  getAll,
  findById,
  isValid,
  create,
}