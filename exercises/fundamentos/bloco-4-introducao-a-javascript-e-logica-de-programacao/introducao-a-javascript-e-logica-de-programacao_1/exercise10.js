let valorCusto = 379;
let valorVenda = 500;
let impostoSobreOCusto = 20;
let lucro;
let valorCustoTotal;

if (valorCusto < 0 || valorVenda < 0){
    console.log('Valor inválido')
}else {

    valorCustoTotal = valorCusto + (valorCusto*impostoSobreOCusto/100);

    lucro = valorVenda - valorCustoTotal ;
    console.log(lucro);
}