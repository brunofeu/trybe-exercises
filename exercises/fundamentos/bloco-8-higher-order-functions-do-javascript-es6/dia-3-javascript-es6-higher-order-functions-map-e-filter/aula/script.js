const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const listProducts = (product, price) => product.map((item, index) => ( { [item] : price[index]}) )


console.log(listProducts(products, prices))
