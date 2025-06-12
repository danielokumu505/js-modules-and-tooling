//exporting module
//the exporting module is executed first before the importing module
console.log('exporting module. executed first');

//top level await blocking code
// console.log('Start fetching users');

// const response = await fetch('https://jsonplaceholder.typicode.com/users');

// console.log('Finish fetching users');
//top level await blocks code for both exporting module and importing module

const shippingCost = 10; //variables are scoped to the current module ie cannot be directly
//...used in script.js ie the variable is private in its current module

const cart = [];

//export only works at top level code : outside functions(){} and if(){} scopes
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });

  console.log(`${quantity} ${product} added to cart`);
}; //named export**

const totalPrice = 237;

const totalQuantity = 23;

export { totalPrice, totalQuantity as quantity, cart };

export default function (product, quantity) {
  cart.push({ product, quantity });

  console.log(`${quantity} ${product} added to cart`);
} //not named..named at the importing module
