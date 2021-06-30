let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
};

console.log('Bem vinda,', info.personagem)

info.recorrente = 'Sim';
console.log(info);

for (let key in info){
  console.log(info[key])
}

let outraInfo = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (let index in outraInfo){
  if (info[index] === outraInfo[index]){
    console.log('Ambos ' + index+'s')
  }else {
  console.log (info[index] + ' e ' + outraInfo[index])
}

}