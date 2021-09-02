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

const menu = [...restaurant.startermenu, ...restaurant.mainMenu];

console.log(menu);

// No index element
console.log('No index element');
for (const item of menu) console.log(item);

// With index element
console.log('With index element Traditional Approach');
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

console.log([...menu.entries()]);

console.log('With index element');
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
