// Faça uma função que obtenha seis dados de data-hora (ano, mês, dia, hora, minuto, segundo) 
// e retorne os dados de ano, mês e dia formatados.

const assert = require('assert');

const formatDate = (year, month, day, hour, minute, second) => {
    return `${day}/${month}/${year} - ${hour}:${minute}:${second}`
}

const dataInfo = ['1981', '7', '31', '22', '47', '12'];

let expectedValue = '31/7/1981 - 22:47:12';

assert.strictEqual(formatDate(...dataInfo), expectedValue);
