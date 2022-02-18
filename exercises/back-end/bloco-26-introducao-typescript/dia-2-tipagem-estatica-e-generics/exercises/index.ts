import readLine from 'readline-sync';
import estacoesDoANo from './Seasons';
import mesesDoAno from './Months';

const months = Object.values(mesesDoAno)


const month = readLine.keyInSelect(months, "Escolha um mês do ano")

const seasonsSouth = {
  [estacoesDoANo.OUTONO]: [mesesDoAno.MARCO, mesesDoAno.ABRIL, mesesDoAno.MAIO, mesesDoAno.JUNHO],
  [estacoesDoANo.INVERNO]: [mesesDoAno.JUNHO, mesesDoAno.JULHO, mesesDoAno.AGOSTO, mesesDoAno.SETEMBRO],
  [estacoesDoANo.PRIMAVERA]: [mesesDoAno.SETEMBRO, mesesDoAno.OUTUBRO, mesesDoAno.NOVEMBRO, mesesDoAno.DEZEMBRO],
  [estacoesDoANo.VERAO]: [mesesDoAno.DEZEMBRO, mesesDoAno.JANEIRO, mesesDoAno.FEVEREIRO, mesesDoAno.MARCO],
}

const seasonsNorth = {
  [estacoesDoANo.OUTONO]: seasonsSouth[estacoesDoANo.PRIMAVERA],
  [estacoesDoANo.INVERNO]: seasonsSouth[estacoesDoANo.VERAO],
  [estacoesDoANo.PRIMAVERA]: seasonsSouth[estacoesDoANo.OUTONO],
  [estacoesDoANo.VERAO]: seasonsSouth[estacoesDoANo.INVERNO],
}

// const hemispheres = {
//   'Norte': seasonsNorth, 'Sul': seasonsSouth
// }

// const hemisphere = readLine.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério")