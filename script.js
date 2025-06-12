//importing module
//the exporting module is executed first before the importing module
// import { addToCart, totalPrice as price, quantity } from './shoppingCart.js'; //named import**
// addToCart('Bread', 5);
// console.log(price, quantity);

// import * as ShoppingCat from './shoppingCart.js'; //importing every accessible variable from shoppingCart module

console.log('importing module. executed second');

import { cart } from './shoppingCart';
//console.log(shippingCost);//undefined //this variable is scoped to shoppingCart.js module

// console.log(ShoppingCat);

// ShoppingCat.addToCart('bread', 5);

// console.log(ShoppingCat.totalPrice);

// import add, {
//   addToCart,
//   totalPrice as price,
//   quantity,
// } from './shoppingCart.js';

import add, { totalPrice } from './shoppingCart.js'; //exported (default export) value/function is named at the importing module
//use one default export per module

add('Bread', 10);
add('Pizza', 5);
add('Apple', 15);

// console.log(cart);
// console.log(totalPrice);
//Note : imports are not copies of exports. they point to the same place in memory
//... they are the exact same object behind the scenes

//Top level await****************************************************************************
//top level await outside the async function blocks the execution of code written after it in the module

// console.log('Start fetching');

// const response = await fetch('https://jsonplaceholder.typicode.com/posts');

// const data = await response.json();

// console.log(data);

// console.log('Something');

const getLastPost = async function () {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  const data = await response.json();

  //   console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

//use case of using top level await
// const lastPost = await getLastPost(); //top level await not supported in parcel

// console.log(lastPost);

//the module pattern

//IIFE
const ShoppingCart2 = (function () {
  const cart = [];

  const shippingCost = 10;

  const totalPrice = 237;

  const totalQuantity = 10;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });

    console.log(`${quantity} ${product} added to cart ${shippingCost}`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  }; //enables values/functions to be accessed outside the IIFE
})();

//closures allow a function to have access to all variables that were present at its place of birth

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);

// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost);

//CommonJS modules as used in node js
//exporting using common js
// export.addToCart=function (product, quantity) {
//   cart.push({ product, quantity });

//   console.log(`${quantity} ${product} added to cart ${shippingCost}`);
// };

// //importing using common js
// const {addToCart}=require('./shoppingCart.js')

//Command line**************************************

//clonedeep used to copy deeply nested objects
import cloneDeep from '../starter/node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 10 },
  ],

  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state); //shallow cloning

const stateCloneDeep = cloneDeep(state); //deep cloning

state.user.loggedIn = false; //original object state is still changing the values of copied object stateClone

console.log(stateClone); //original object state is still changing the values of copied object stateClone

console.log(stateCloneDeep); //using cloneDeep, object stateCloneDeep is not affected by change in object state

//Note : dependencies in package,json allow installation of those packages using npm install command

if (module.hot) {
  module.hot.accept();
} //prevent page reload to maintain state on web page

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('jonas' ?? null);

console.log(cart);

console.log(cart.find(element => element.quantity > 10));

Promise.resolve('Test').then(response => {
  console.log(response);
});

import 'core-js'; //for polifyling

import 'regenerator-runtime'; //for polyfiling async functions
