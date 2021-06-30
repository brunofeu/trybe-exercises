function indiceMenor(array){
  let menor = 0;
  

  for (let index = 1; index < array.length; index +=1){
    if( array[index] < array[index-1]){
      menor = index;
    }
  }
  console.log(menor);
}

indiceMenor([2, 4, 6, 7, 10, 0, -3]);