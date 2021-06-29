function combineString(word, ending){
  let cont=1;
  let compara=0;
  for ( let index = (ending.length -1); index >=0 ; index -= 1){
    if (ending[index]===word[word.length-cont]){
      compara +=1;
    }
    cont +=1;
  }
  if (compara === ending.length){
    console.log('true');
  }else{
    console.log('false');
  }
}

combineString('trybe','be');
combineString('joaofernando','fernan');