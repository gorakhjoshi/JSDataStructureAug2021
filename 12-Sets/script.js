'use strict';
// 1. Sets
// main aim is to remove duplicate elements from an array
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

// 2. Passing strings as iterable
console.log(new Set('Achiever'));

// 3. Different methods in Sets
console.log(ordersSet.size);

console.log(ordersSet.has('Pizza'));

console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

ordersSet.delete('Risotto');
console.log(ordersSet);

// ordersSet.clear();
console.log(ordersSet);

// Extracting value out of Set
// console.log(ordersSet[1]);
// not possible

// 4. Sets are iterable and hence looping is possible
for (const order of ordersSet) console.log(order);

// 5. Reallife use case
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);
// but we want an array

// 6. if we only want size?
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

// 7. How many letters in string
console.log(new Set('Achiever').size);
