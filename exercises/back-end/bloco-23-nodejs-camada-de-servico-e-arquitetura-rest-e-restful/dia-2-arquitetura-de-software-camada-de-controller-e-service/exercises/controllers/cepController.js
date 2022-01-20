const cepService = require('../services/cepService')

const isValid = ({ cep, logradouro, bairro, localidade, uf }) => {
  switch (true) {
    case (!cep || cep === ''): return false
    case (!logradouro || logradouro === ''): return false
    case (!bairro || bairro === ''): return false
    case (!localidade || localidade === ''): return false
    case (!uf || uf === ''): return false
    default: return { cep, logradouro, bairro, localidade, uf }
  }
}

const getCep = async (req, res, next) => {
  const { cep } = req.params;
  const regexCep = /\d{5}-?\d{3}/
  
  if (!regexCep.test(cep)) return res.status(400).json(  { error: { "code": "invalidData", "message": "CEP inválido" } })
  
  const cepData = await cepService.getCep(cep);

  console.log(cepData.error)

  if (cepData.error) return res.status(400).json({message: 'next(cepData.error)' })

  res.status(200).json(cepData)
}

module.exports = {
  getCep,
}