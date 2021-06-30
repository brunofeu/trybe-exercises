let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars){
    console.log(cars[index])
}


let car1 = {
    type: 'Fiat',
    model: '500',
    color: 'white',
};

for (let index in car1) {
    console.log(index, car1[index])
}

console.log('---------------------')

let names ={
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge'
};

for (let index in names){
  console.log ('Olá ' + names[index])
}

console.log('---------------------')

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
}

for (let index in car)
console.log(index+':', car[index])