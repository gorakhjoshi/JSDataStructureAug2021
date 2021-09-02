'use strict';
const restaurant = {
  name: 'Pepe Pizza',
  location: 'Tripureshwor',
  categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
  startermenu: ['Focaccia', 'Bruschetta', 'Garlic', 'bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //  functions expression is used inside object to create method.
  order: function (starterIndex, mainIndex) {
    return [this.startermenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Orderreceived! ${this.startermenu[starterIndex]} and ${this.mainMenu[mainIndex]}, will be delevered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Your pasta is ready using ingredients ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

console.log('--- Using OR Operator ---');
console.log(47 || 'Achiever');
// || is boolean operator but not only numbers but any data type
// JS look at first truthy value - ShortCircuiting
// Falsy value 0, '', undefined, null, NaN
// || operator short circuits when first operator is true
console.log('' || 'Achiever');
console.log(true || 0);
console.log(undefined || null);

// predict the result below
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// practical example
// traditional approach
// restaurant.numGuset = 23;
const guest1 = restaurant.numGuset ? restaurant.numGuset : 10;
console.log(guest1);
// using short ShortCircuiting
const guest2 = restaurant.numGuset || 10;
// without using ternary and if else operator
console.log(guest2); // Both solution not works if number of guest is 0. We will talk in next class

console.log('--- Using AND Operator ---');
console.log(0 && 'Achiever');
// and operator short circuits when first value is falsy
console.log(7 && 'Achiever');
console.log('Hello' && 23 && null && 'Achiever');
// shortcircuits at null

// practical example
// traditional approach
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}
// short circuit approach
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

// summary
// if || returns first value then condition is truthy else return last value indicating condition falsy
// if && returns first value then condition is falsy else return last value indicating condition truthy
