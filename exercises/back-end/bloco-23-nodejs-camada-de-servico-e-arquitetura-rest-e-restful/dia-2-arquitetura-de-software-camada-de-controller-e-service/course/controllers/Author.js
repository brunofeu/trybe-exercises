const Author = require('../services/Author');

const Joi = require('joi');

const getAll =async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
}

const findById = async (req, res, next) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if(author.error) return next(author.error);

  res.status(200).json(author);
}

const create = async (req, res, next) => {
  const {firstName, midleName, lastName} = req.body;
  
  const { error } = Joi.object({
    firstName: Joi.string().not().empty().required(),
    lastName: Joi.string().not().empty().required,
  }).validate({firstName, lastName})
  
  if (error) return next(error);

  const author = await Author.create(firstName, midleName, lastName)

  if (author.error) return next(author.error)

  return res.status(201).json(author)
}

module.exports = {
  getAll,
  findById,
  create,
}