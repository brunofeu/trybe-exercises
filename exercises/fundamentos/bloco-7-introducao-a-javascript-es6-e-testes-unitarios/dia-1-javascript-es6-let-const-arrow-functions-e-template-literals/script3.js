const fatorial = (num) => {
  let fatorial = num;
  for (let i = num; i > 1; i -= 1){
    fatorial *= (i-1) 
  } 
     return fatorial
}

console.log(fatorial(3));

_________________________________________________

const longestWord = ("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'
const maiorPalavra = (word) => {
  let maior = word.split(' ')[0].length;
  let palavra = 0;
  for (let i = 1; i < word.split(' ').length; i += 1) {
    if(word.split(' ')[i].length > maior){
      maior = word.split(' ')[i].length;
      palavra= i;  
    }
  } 
  return word.split(' ')[palavra];
  

}
console.log(maiorPalavra(longestWord));
