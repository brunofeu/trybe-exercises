function maiorNome(array){
  let maior = '';
  

  for (let index = 1; index < array.length; index +=1){

    if( array[index].length > array[index - 1].length){
      maior = array[index];
    }
  }
  console.log(maior);
}

maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);