let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;
for (index = 0; index < numbers.length; index += 1){
     if (numbers[index] > maior){
         maior = numbers[index];
     }
}
console.log(maior);

 maior = 0;
 for (let number of numbers){
     if (number > maior){
         maior = number;
     }
}
console.log(maior);