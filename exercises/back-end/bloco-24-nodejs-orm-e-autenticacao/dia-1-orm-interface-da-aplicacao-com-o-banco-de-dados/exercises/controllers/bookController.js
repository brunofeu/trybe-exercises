const express = require('express');
const { Book } = require('../models')
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll()
    
    res.status(200).json(books)
    
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Algo deu errado' });
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id)

    res.status(200).json(book)

  } catch (e) {
    console.error
    res.status(500).json({ message: 'Algo deu errado' });
  }
})

router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity})
    res.status(200).json(newBook);
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'Algo deu errado' });
  }
})

router.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const updated = await Book.update({ title, author, pageQuantity }, { where: { id }});
    res.status(200).json(updated);
  } catch (e) {
    console.error;
    res.status(500).json({ message: 'Algo deu errado' });
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const removed = await Book.destroy({ where: { id }})
    res.status(200).json(removed);
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'Algo deu errado' });
  }
})

module.exports = router;