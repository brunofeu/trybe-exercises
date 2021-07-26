const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

// let newKey = 'lastName';
// const lastName = 'Ferreira';
// customer[newKey] = lastName;
// newKey = 'fullName';
// const fullName = `${customer.firstName} ${customer.lastName}`;
// customer[newKey] = fullName;
// console.log(customer);

const func = (object, newKey, value) => {
 
  object[newKey] = value;
  return object
}

console.log(func(customer, 'lastName', 'ferreira'))