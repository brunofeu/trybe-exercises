let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let med =0;
for (let number of numbers){
med += number;
}

if (med /= numbers.length > 20 ){
    console.log('valor maior que 20');
}else {
    console.log('valor menor ou igual a 20')
}
