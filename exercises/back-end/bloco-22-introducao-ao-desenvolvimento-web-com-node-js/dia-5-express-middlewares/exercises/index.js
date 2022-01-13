const app = require('express')();
const bodyParse = require('body-parser');

app.use(bodyParse.json());

const validateEmail = (email) => {
  testEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/
  return testEmail.test(email)
}

const validatePassword = (password) => {
  const passwordRegex = /^[0-9]*$/;
  
  return password.length >= 4 && password.length <= 8 && password.match(passwordRegex)
}

app.post('/user/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!(username.length > 3 && validateEmail(email) && validatePassword(password))) {
    return res.status(400).json({ "message": "invalid data" })
  }

  res.status(201).json({ "message": "user created" })
})


app.listen(3000)