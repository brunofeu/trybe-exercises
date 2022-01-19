const connection = require('./connection');

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

module.exports = {
  getAll,
  findById,
}