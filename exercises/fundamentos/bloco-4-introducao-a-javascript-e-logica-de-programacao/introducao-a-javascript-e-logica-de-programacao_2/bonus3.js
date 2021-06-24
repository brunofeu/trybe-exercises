let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numbers.push(2);
let array =[];
for (index = 0 ; index < numbers.length - 1; index += 1){
    array[index] = numbers[index]*numbers[index + 1];  
}
console.log(array);