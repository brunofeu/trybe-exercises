const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


const adicionaTurno = (object, key, value) => {
  object[key] = value;
  console.log (object)
}
adicionaTurno(lesson2, 'turno', 'manhã');

const mostraKeys = (object) => {
  for (keys in object) {
  console.log(keys);
}}

mostraKeys(lesson2)

const tamanhoObj = (obj) => console.log(Object.keys(obj).length);

tamanhoObj(lesson2);

const mostraValue = (object) => {
  for (keys in object) {
  console.log(object[keys]);
}}
mostraValue(lesson2)

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

const totalEstudantes = (obj) => {
  let estudantes =0;
  for (indexLesson in obj){
    estudantes += obj[indexLesson].numeroEstudantes;
  }
  console.log(estudantes)
}
totalEstudantes(allLessons);

const getValueByNumber = (obj, num) => console.log(Object.values(obj)[num]);
getValueByNumber(lesson1,0);

const checkPair = (obj, key, value) => {
  // const entries = Obj
  if(Object.entries(obj).includes(key)){
    if(obj[key] === value) {
      return true;
    } else return false;
  } else return console.log(Object.entries(obj).includes(key))
}
console.log(checkPair(lesson3, 'turno', 'noite'))