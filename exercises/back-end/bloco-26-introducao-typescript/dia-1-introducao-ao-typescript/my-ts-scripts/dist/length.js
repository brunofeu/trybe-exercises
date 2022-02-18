"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
const convert = (valor, base, conversao) => {
    const forIndex = units.indexOf(base); // pegamos o index da unidade base no array
    const toIndex = units.indexOf(conversao); // pegamos o index da unidade para a conversão
    const exponent = (toIndex - forIndex); // calculamos o expoente a partir da diferença dos index
    const result = valor * Math.pow(10, exponent);
    // console.log(result)
    return result;
};
const exec = () => {
    const valor = readline_sync_1.default.questionFloat('escolha o número ');
    const baseIndex = readline_sync_1.default.keyInSelect(units, 'escolha a base ');
    const conversaoIndex = readline_sync_1.default.keyInSelect(units, 'escolha a conversao ');
    const result = convert(valor, units[baseIndex], units[conversaoIndex]);
    console.log(result, units[conversaoIndex]);
};
exec();
// convert(10, 'km', 'm')
