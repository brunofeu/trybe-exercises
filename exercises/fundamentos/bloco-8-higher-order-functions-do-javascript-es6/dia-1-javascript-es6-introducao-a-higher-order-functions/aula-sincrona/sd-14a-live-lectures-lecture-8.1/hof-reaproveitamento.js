const jogadores = ['Pelé', 'Jairzinho', 'Marta', 'Formiga', 'Hulk', 'Juary', 'Fábio', 'Janderson', 'Sócrates'];

// const filtarComecandoPor = (arrayInicial, letraInicial) => {
//   const arrayResposta = [];
//   for(let info of arrayInicial){
//     if(info[0] !== letraInicial){
//       arrayResposta.push(info)
//     }
//   }
// return arrayResposta
// }

// const filtarMenorQue = (arrayInicial, tamanho) => {
//   const arrayResposta = [];
//   for(let info of arrayInicial){
//     if(info.length < tamanho ){
//       arrayResposta.push(info)
//     }
//   }
// return arrayResposta
// }

// // Filtrar jogadores que o nome não comece pela letra J
// let jogadoresFiltrados = filtarComecandoPor(jogadores, 'J');
// console.log(jogadoresFiltrados);

// // Filtrar jogadores que o nome não comece pela letra F
// jogadoresFiltrados = filtarComecandoPor(jogadoresFiltrados, 'F');
// console.log(jogadoresFiltrados);

// // Filtrar jogadores que o nome tenha menos que 5 letras
// jogadoresFiltrados = filtarMenorQue(jogadoresFiltrados, 5)
// console.log(jogadoresFiltrados);


const filtrar = (arrayInicial, filtro) => {
  const arrayResposta = [];
  for(let info of arrayInicial){
    if(filtro(info)){
      arrayResposta.push(info)
    }
  }
return arrayResposta
}

let jogadoresFiltrados = filtrar(jogadores, (jogador) => jogador[0] !== 'J');
console.log(jogadoresFiltrados);

jogadoresFiltrados = filtrar(jogadoresFiltrados, (jogador) => jogador[0] !== 'F');
console.log(jogadoresFiltrados);

jogadoresFiltrados = filtrar(jogadoresFiltrados, (jogador) => jogador.length <5)
console.log(jogadoresFiltrados);


