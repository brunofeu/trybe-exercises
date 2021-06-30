function roman(numeroRomano){
  let somaEsq =0;
  let somaDir =0;
  let resultado=0;

romanos = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}
  
  for ( let index = 0; index < numeroRomano.length; index +=1){
   somaEsq = romanos[numeroRomano[index]];
   somaDir = romanos[numeroRomano[index+1]];

   if(somaEsq < somaDir){
     resultado -= somaEsq;
   }else {
     resultado += somaEsq;
   }
   }
   console.log(resultado);
  }

  
roman('IX');
roman('CM');
roman('III');
roman('XXV');
roman('MMXVIII');