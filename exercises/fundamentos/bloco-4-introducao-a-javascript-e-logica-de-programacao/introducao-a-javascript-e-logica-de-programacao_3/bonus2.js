let numero = 991;
let primo = 0;

for (index = 2; index < (numero); index += 1){
    if (numero%(index) === 0){
        primo += 1;
    }}
    if (primo !== 0){
        console.log('Não Primo');
    }else {
        console.log('Primo')
    }
