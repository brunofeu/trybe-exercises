function maisRepete(array){
  let cont = 0;
  let contMaior = 0;
  let num =0;
for (let index = 0; index < array.length; index+=1){
  cont = 0;
  for (let indexCompara = index; indexCompara < array.length; indexCompara +=1){
    if (array[index] === array[indexCompara]){
      cont += 1;
    }
  }
  if (cont > contMaior){
    contMaior = cont;
    num = array[index];
  }
}
console.log(num);
}

maisRepete([2, 3, 3,7, 5, 7, 8, 7, 2, 3, 7, 5, 6, 7, 2, 3, 4])