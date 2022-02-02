const jwt = require('jsonwebtoken');
const Joi = require('joi');

const { JWT_SECRET } = process.env;

const validateBody = (body) => 
  Joi.object({
    username: Joi.string().min(5).alphanum().required(),
    password: Joi.string().min(5).required(),
  }).validate(body);

module.exports = (req, res, next) => {
  const { error } = validateBody(req.body);
  if (error) return next(error);

  const { username, password } = req.body;

  const payload = { username, admin: false };

  if (username === 'admin' && password === 's3nh4S3gur4???') {
    payload.admin = true;
  }

  const token = jwt.sign(payload, JWT_SECRET, { algorithm: 'HS256', expiresIn: '1h' });
  res.status(200).json({ token });
};