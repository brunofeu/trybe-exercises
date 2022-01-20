const connection = require('./connection');

const getCep = async (cep) => {
  const [cepData] = await connection.execute('SELECT * FROM ceps WHERE cep=?',[cep])

  if (cepData.length === 0) return null

  return cepData
}

module.exports = {
  getCep,
}