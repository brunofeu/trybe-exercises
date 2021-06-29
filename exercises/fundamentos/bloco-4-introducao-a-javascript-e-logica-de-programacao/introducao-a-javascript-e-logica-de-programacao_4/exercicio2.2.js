function indiceMaior(array){
  let maior = 0;
  

  for (let index = 1; index < array.length; index +=1){
    if( array[index] > array[index-1]){
      maior = index;
    }
  }
  console.log(maior);
}

indiceMaior([2, 3, 6, 7, 10, 1]);