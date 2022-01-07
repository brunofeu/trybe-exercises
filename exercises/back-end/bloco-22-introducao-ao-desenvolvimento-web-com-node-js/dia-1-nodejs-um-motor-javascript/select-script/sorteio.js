const readline = require('readline-sync');

const randomNumber = Math.ceil((Math.random()*10))

console.log('Jogo da adivinhação')
const userNumber = readline.questionInt('Insira um numero entre 0 e 10: \n')

console.log(userNumber === randomNumber 
  ? `Certa resposta!` 
  : `Que pena, você errou! a resposta era ${randomNumber}`)