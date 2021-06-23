function getRandomIntInclusive(min, max) {
    min = Math.ceil(1);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let num1 = getRandomIntInclusive();
  let num2 = getRandomIntInclusive();
  let num3 = getRandomIntInclusive();

  if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0 ){
      console.log('Existe um número par ' + num1 +" " + num2+" "+num3)
  }else {
      console.log('Todos os números são ímpares ' + num1+" " +num2+" "+num3)
  }