module.exports = (req, res, next) => {
  const { admin } = req.user;

  if (!admin) {
    const err = new Error('Restricted access');
    err.statusCode = 403;

    return next(err);
  }
  res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Arannha' });
};
