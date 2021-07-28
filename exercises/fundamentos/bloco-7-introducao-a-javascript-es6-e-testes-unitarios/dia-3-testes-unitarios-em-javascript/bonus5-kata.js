const { assert } = require("console");

const Verify = (password) => {
  if (password.length < 8 || password === null){
    throw new Error: 'senha inválida' ;
  }

}