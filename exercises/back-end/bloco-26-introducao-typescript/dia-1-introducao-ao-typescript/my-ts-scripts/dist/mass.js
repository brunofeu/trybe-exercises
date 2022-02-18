var units = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
var convert = function (valor, base, conversao) {
    var forIndex = units.indexOf(base);
    var toIndex = units.indexOf(conversao);
    var expoent = (toIndex - forIndex);
    var result = valor * Math.pow(10, expoent);
    console.log(result, "".concat(conversao));
    return result;
};
convert(10, 'kg', 'mg');
