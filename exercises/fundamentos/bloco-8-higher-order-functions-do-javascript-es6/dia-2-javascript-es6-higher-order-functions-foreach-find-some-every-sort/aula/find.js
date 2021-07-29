//EX 1

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (numbersArray) => {
    // Adicione seu código aqui:
  return numbersArray.find((element) => (element % 3 === 0) && (element % 5 ===0))
};

console.log(findDivisibleBy3And5(numbers))


//EX2 

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (array) => {
  // Adicione seu código aqui:
  return array.find((element) => element.length === 5)
}

console.log(findNameWithFiveLetters(names));

//EX3

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
  return (musicas.find((musica) => musica.id === id))
 
}

console.log(findMusic('31031685').title)


// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0;

// const isEven = numbers.find(verifyEven);

// console.log(isEven); // 30

// console.log(verifyEven(9)); // False
// console.log(verifyEven(14)); // True

// // Outra forma de ser realizada sem a necessidade de criar uma nova função.
// const isEven2 = numbers.find((number) => number % 2 === 0);

// console.log(isEven2); // 30