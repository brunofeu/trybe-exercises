function soma(num){
  sum = 0;
  for (let index = 0; index <= num; index += 1){
    sum += index;
  }
  console.log(sum);
}

soma(6);