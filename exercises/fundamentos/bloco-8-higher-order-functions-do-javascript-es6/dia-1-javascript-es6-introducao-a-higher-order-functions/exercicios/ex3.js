const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkIfCorrect = (gabarito, respostas) => {
  let nota = 0;
  for (let check in respostas){
    if (respostas[check] !== 'N.A'){
      if (respostas[check] === gabarito[check]){
        nota += 1;
      } else nota -= 0.5;
    }
  } return nota;
};

const hof = (gabarito, respostas, isCorrect) => isCorrect(gabarito, respostas);

console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, checkIfCorrect))

