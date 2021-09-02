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

restaurant.numGuset = 0;
const guest = restaurant.numGuset || 10;
console.log(guest);

// ES 2020 feature
// short circuit when no nullish value instead of falsy value.
// Nullish value are null and undefined (NOT '' and 0)
const guestCorrect = restaurant.numGuset ?? 10;
console.log(guestCorrect);
