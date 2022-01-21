const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM people');
  return result
}

const getById = async (id) => {
  const [result] = await connection.execute('SELECT * FROM people WHERE id=?',[id]);
  
  if(!result.length) return null;

  return result[0];
}

const update = async (id, {name, age}) => {
  const [result] = await connection.execute('UPDATE people SET name = ?, age = ? WHERE id=?', [name, age, id]);
  return result
}



module.exports = {
  getAll,
  getById,
  update,
}