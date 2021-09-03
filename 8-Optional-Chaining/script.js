'use strict';
// 3. We can now compute property name
const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const openingHours = {
  [weekdays[3]]: {
    open: 0,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day ${4 + 2}`]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Pepe Pizza',
  location: 'Tripureshwor',
  categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
  startermenu: ['Focaccia', 'Bruschetta', 'Garlic', 'bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // 1. ES6 Enhanced object literal
  openingHours,

  // 2. No need to write function keyword
  order(starterIndex, mainIndex) {
    return [this.startermenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Orderreceived! ${this.startermenu[starterIndex]} and ${this.mainMenu[mainIndex]}, will be delevered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Your pasta is ready using ingredients ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

// 1. Optional chaining is the feature of ES 2020
// console.log(restaurant.openingHours.mon);
// console.log(restaurant.openingHours.mon.open);

// 2. Traditional approach
// if(restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open)

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// 3. with optional chaining
// console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.wed.open);
console.log(restaurant.openingHours?.mon?.open);

// property exists if it is not null or not undefined.
// if it is 0 or '' it still exists

const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
for (const day of days) {
  // const open = restaurant.openingHours[day]?.open;
  // const open = restaurant.openingHours[day]?.open || '10';
  const open = restaurant.openingHours[day]?.open ?? '10';
  console.log(`On ${day}, open at ${open}`);
}

console.log(restaurant.order?.(0, 1) ?? "Method doesn't exists");
console.log(restaurant.delivery?.(0, 1) ?? "Method doesn't exists");

const users = [{ name: 'Achiever', email: 'info@achievergroups.com' }];

console.log(users[0]?.name ?? 'User doesn not exists');
