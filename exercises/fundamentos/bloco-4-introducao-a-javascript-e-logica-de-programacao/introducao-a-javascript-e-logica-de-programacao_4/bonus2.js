//  vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector){
  let oddArray =[];
  let tempArray =[];
  for (let index in vector){
    tempArray = (vector[index]);
      for (let indexInt in tempArray){
        if (tempArray[indexInt]%2 === 0){
        oddArray.push(tempArray[indexInt]);
        }
      }
}
console.log(oddArray);
}
arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]);