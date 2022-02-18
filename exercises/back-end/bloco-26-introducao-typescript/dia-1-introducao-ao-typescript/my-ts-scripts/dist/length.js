"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
var convert = function (valor, base, conversao) {
    var forIndex = units.indexOf(base); // pegamos o index da unidade base no array
    var toIndex = units.indexOf(conversao); // pegamos o index da unidade para a conversão
    var exponent = (toIndex - forIndex); // calculamos o expoente a partir da diferença dos index
    var result = valor * Math.pow(10, exponent);
    // console.log(result)
    return result;
};
var exec = function () {
    var valor = readline_sync_1["default"].questionFloat('escolha o número ');
    var baseIndex = readline_sync_1["default"].keyInSelect(units, 'escolha a base ');
    var conversaoIndex = readline_sync_1["default"].keyInSelect(units, 'escolha a conversao ');
    var result = convert(valor, units[baseIndex], units[conversaoIndex]);
    console.log(result, units[conversaoIndex]);
};
exec();
// convert(10, 'km', 'm')
