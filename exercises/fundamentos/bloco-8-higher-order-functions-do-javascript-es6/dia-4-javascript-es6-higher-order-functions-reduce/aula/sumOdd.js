const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumOdds = (acc, number) => (number % 2 === 0) ? acc += number : acc
// result = sumOdds(sumOdds, 0)
result = numbers.reduce(sumOdds, 0)
// result = sumOdds(sumOdds, 0)

console.log(result);