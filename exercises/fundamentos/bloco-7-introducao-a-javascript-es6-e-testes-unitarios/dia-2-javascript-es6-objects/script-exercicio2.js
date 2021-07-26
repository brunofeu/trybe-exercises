const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

// exercício 1

const adicionaTurno = (object, key, value) => {
  object[key] = value;
  console.log(object);
};
adicionaTurno(lesson2, "turno", "manhã");

// exercício 2

const mostraKeys = (object) => {
  for (keys in object) {
    console.log(keys);
  }
};

mostraKeys(lesson2);

// exercício 3

const tamanhoObj = (obj) => console.log(Object.keys(obj).length);

tamanhoObj(lesson2);

// exercício 4

const mostraValue = (object) => {
  for (keys in object) {
    console.log(object[keys]);
  }
};
mostraValue(lesson2);

// exercício 5

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

// exercício 6

const totalEstudantes = (obj) => {
  let estudantes = 0;
  for (indexLesson in obj) {
    estudantes += obj[indexLesson].numeroEstudantes;
  }
  console.log(estudantes);
};
totalEstudantes(allLessons);

// exercício 7

const getValueByNumber = (obj, num) => console.log(Object.values(obj)[num]);
getValueByNumber(lesson1, 0);

// exercício 8

const checkPair = (obj, key, value) => {
  // const entries = Obj
  if (Object.keys(obj).includes(key)) {
    if (obj[key] === value) {
      return true;
    } else return false;
  } else return false;
};
console.log(checkPair(lesson3, "turno", "noite"));

// exercício Bonus 1

const contAlunosMat = (obj) => {
  let estudantes = 0;
  for (index of Object.keys(obj)) {
    if (obj[index].materia === "Matemática") {
      //
      estudantes += obj[index].numeroEstudantes;
    }
  }
  console.log(estudantes);
};

contAlunosMat(allLessons);

// exercício Bonus 2

const createReport = (obj, teacher) => {
  let report = {};
  for (index of Object.keys(obj)){
    if (obj[index].professor === teacher){
      report = Object.assign({}, obj[index].materia, obj[index].professor)
    }
  }
  return report;
}


console.log(createReport(allLessons, 'Maria Clara'))