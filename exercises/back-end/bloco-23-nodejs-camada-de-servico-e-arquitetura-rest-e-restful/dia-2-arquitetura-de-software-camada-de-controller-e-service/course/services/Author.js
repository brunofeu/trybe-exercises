const Author = require('../models/Author')

// Cria uma string com o nome completo do autor
const getNewAuthor = ({id, firstName, middleName, lastName}) => {

  // Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
  // nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
  const fullName = [firstName, middleName, lastName]
    .filter(Boolean)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true
}

const getAll = async () => {
  const authors = await Author.getAll()

  return authors.map(getNewAuthor)
}

const findById = async (id) => {
  const author = await Author.findById(id)

  return getNewAuthor(author)
}

const create = async (firstName, middleName, lastName) => {
  const authorValid = isValid(firstName, middleName, lastName)

  if(!authorValid) return false;

  const {insertedId} = await Author.create(firstName, middleName, lastName)

  return getNewAuthor({
    id: insertedId, 
    firstName, 
    middleName, 
    lastName
  });
}

module.exports = {
  getAll,
  findById,
  create,
}