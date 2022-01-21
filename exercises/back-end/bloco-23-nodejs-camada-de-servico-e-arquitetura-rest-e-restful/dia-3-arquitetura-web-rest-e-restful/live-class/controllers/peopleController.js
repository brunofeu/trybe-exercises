const express = require('express');
const router = express.Router()

const People = require('../models/People');

router
  .get('/', async (req, res) => {
    const people = await People.getAll();
    res.status(200).json(people)
  })
  .get('/:id', async (req, res) => {
    const people = await People.getById(req.params.id);
    res.status(200).json(people)
  })
  .put('/:id', async (req, res) => {
    const {id} = req.params;
    const {name, age} = req.body;
    try {
      const person = await People.getById(id);
    
      if(!person) return res.status(404).json({message: "Não Encontrado."})
  
      const newPerson = {...person, ...req.body}
  
      await People.update(id, newPerson);
  
      res.status(204).end();

    } catch (err) {
      return res.status(500).json({message: 'erro no servidor'})
    }
    
  })



module.exports = router;