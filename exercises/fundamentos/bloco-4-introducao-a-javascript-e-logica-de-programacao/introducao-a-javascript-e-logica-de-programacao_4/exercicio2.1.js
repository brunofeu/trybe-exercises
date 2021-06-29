function palindromo(palavra){
  teste = true;

  for (let index = 0; index < palavra.length; index += 1){
    if (palavra[index] !== palavra[palavra.length-1-index])
   teste = false;
  }
console.log(teste);
}
palindromo('arara');