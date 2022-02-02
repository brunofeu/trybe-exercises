const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
  const { username, password } = req.body;
  if (!username || username.length < 5) {
    return res.status(400).json({ message: 'username invalido' });
  }
  if (!password || password.length < 5) {
    return res.status(400).json({ message: 'username invalido' });
  }
  const token = jwt.sign(
    { username, password },
    'SEGREDO',
    { algorithm: 'HS256', expiresIn: '1d' },
    );
  res.status(200).json({ token });
};