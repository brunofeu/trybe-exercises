const connection = require('./connection');

const getCep = async (cep) => {
  const [cepData] = await connection.execute('SELECT * FROM ceps WHERE cep=?',[cep])

  if (cepData.length === 0) return null

  return cepData
}

const addCep = async ({ cep, logradouro, bairro, localidade, uf }) => connection.execute(
  'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?,?,?,?,?)',
  [cep, logradouro, bairro, localidade, uf]
)

module.exports = {
  getCep,
  addCep,
}