const promiseExercise = () =>{
  const promise = new Promise((resolve, reject) => {
    const randomNumber = () => Math.ceil(Math.random() * 50);
    const arrayOfTen = Array.from({ length: 10 }, randomNumber);
    const arraySqr = arrayOfTen
      .map((number) => Math.pow(number, 2))
      .reduce((acc, number) => acc + number, 0);
      arraySqr < 8000 ? resolve(arraySqr) : reject(arraySqr);
      
  });

  promise
      // .then((arraySqr) => console.log(`Promise resolvida. ${arraySqr}`))
      // .then((arraySqr) => console.log([2, 3, 5, 10].map((div) => arraySqr / div)))
      .then((arraySqr) => [2, 3, 5, 10].map((div) => arraySqr / div))

      .then((arrayDiv) => console.log(arrayDiv.reduce((acc, number) => acc + number)), 0)
      // .catch((arraySqr) => console.log(`Promise rejeitada. ${arraySqr}`))
      .catch(() => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`))
    
}


promiseExercise();