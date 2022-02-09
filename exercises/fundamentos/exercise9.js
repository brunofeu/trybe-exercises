function getRandomIntInclusive(min, max) {
    min = Math.ceil(1);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let num1 = getRandomIntInclusive();
  let num2 = getRandomIntInclusive();
  let num3 = getRandomIntInclusive();

  if (num1 % 2 === 1 || num2 % 2 === 1 || num3 % 2 === 1 ){
      console.log('true ' + num1 +" " + num2+" "+num3)
  }else {
      console.log('false ' + num1+" " +num2+" "+num3)
  }