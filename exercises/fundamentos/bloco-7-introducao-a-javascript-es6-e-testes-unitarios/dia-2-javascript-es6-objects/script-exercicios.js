const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

console.log (typeof(order.order.pizza.marguerita.amount))
const customerInfo = (order) => {
  console.log( `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`);

}

customerInfo(order);

const orderModifier = (order) => {
  let value = 0;
  let sabor = [];
  let bebida = []

  for (index in order.order.pizza){
    if (order.order.pizza[index].amount > 0){
      sabor.push(index);
      value += order.order.pizza[index].amount * order.order.pizza[index].price;
    }
  }
  for (index in order.order.drinks){
    if (order.order.drinks[index].amount > 0){
      bebida.push(order.order.drinks[index].type)
      value += order.order.drinks[index].amount * order.order.drinks[index].price;
    }
  }
  
  value += 5; 
  bebida = [] ? console.log(`Olá,${order.name}, o total do seu pedido de ${sabor.join(' e ')} é R$ ${value},00`) : console.log(`Olá,${order.name}, o total do seu pedido de ${sabor.toString()} e ${bebida.toString()} é R$ ${value},00`)

}

const newClient = () => {
  order.name = 'Bruno Feu'
  order.order.drinks.coke.amount = 0;

}

newClient();
orderModifier(order);