const connection = require('./connection');

const serialize = ({id, first_name, last_name, email, password}) => ({
  id,
  firstName: first_name,
  lastName: last_name,
  email,
  password,
})

const getAll = async () => {
  const [users] = await connection.execute('SELECT * FROM users');
  if (!users) return [];
  return users.map(serialize);
}

const findById = async (id) => {
  const [user] = await connection.execute(
    'SELECT * from users WHERE id=?',[id]
  )
  if (user.length === 0) return null
  return user.map(serialize)[0]
}

const updateUser = async (first_name, last_name, email, password, id) => {
  await connection.execute('UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?',
  [first_name, last_name, email, password, id]);
  return findById(id);
}

const isValid = (firstName, lastName, email, password) => {
  if (!firstName || firstName === '' || typeof firstName !== 'string') return false
  if (!lastName || lastName === '' || typeof lastName !== 'string') return false
  if (!email || email === '' || typeof email !== 'string') return false
  if (password.length < 6) return false

  return true;
}

const create = async (firstName, lastName, email, password) => {
  const [{insertId}] = await connection.execute(
    'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)',
    [firstName, lastName, email, password]
  )
  return { id:insertId, firstName, lastName, email };
}

module.exports = {
  updateUser,
  getAll,
  findById,
  isValid,
  create,
}