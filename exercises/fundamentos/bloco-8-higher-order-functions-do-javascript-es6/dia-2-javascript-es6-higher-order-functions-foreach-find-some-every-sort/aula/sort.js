const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) =>  b -a );
console.log(points); // [1, 5, 10, 25, 40, 100]

//EX1

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((A, B) => A.age - B.age);
// Adicione se código aqui

// console.log(people.age);
console.log(people);

//EX2 

people.sort((A, B) => B.age - A.age);
// Adicione se código aqui

// console.log(people.age);
console.log(people);

