"use strict";
const units = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
const convert = (valor, base, conversao) => {
    const forIndex = units.indexOf(base);
    const toIndex = units.indexOf(conversao);
    const expoent = (toIndex - forIndex);
    const result = valor * Math.pow(10, expoent);
    console.log(result, `${conversao}`);
    return result;
};
convert(10, 'kg', 'mg');
