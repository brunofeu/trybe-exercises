module.exports = (err, req, res, _next) => {

  // Se for um erro do Joi, sabemos que trata-se de um erro de validação
  if (err.isJoi) {
    return res.status(400)
      .json({ error: { message: err.details[0].message } });
  }

  const statusByErrorCode = {
    notFound: 404, // Erros do tipo `notFound` retornam status 404 Not Found
    alreadyExists: 409, // Erros do tipo `alreadyExists` retornam status 409 Conflict
    // Podemos adicionar quantos códigos novos desejarmos
  };
  const status = statusByErrorCode[err.code] || 500;

  res.status(status).json({ error: { message: err.message } });
}