'use strict';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
}); //object.freeze makes this object immutable

// spendingLimits.jay = 200;

// console.log(spendingLimits);

// const getLimit = user => spendingLimits?.[user] ?? 0; //optional chaining and nullish coalescing operator.

const getLimit = (limits, user) => limits[user] ?? 0; //alternatively

//Pure function
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(newBudget3);

const checkExpenses = function (state, limits) {
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limitsss' }
      : entry;
  });

  // for (const entry of budget) {
  // console.log(spendingLimits[entry.user]); //console.log(spendingLimits['matilda']);

  // if (spendingLimits[entry.user]) {
  //   lim = spendingLimits[entry.user];
  // } else {
  //   lim = 0;
  // }

  //   if (entry.value < -getLimit(limits, entry.user)) {
  //     entry.flag = 'limit';
  //   }
  // }
};

const finalBugdet = checkExpenses(newBudget3, spendingLimits); //pass all the data needed by a function right into
//...the function so that the function does not depend on any outside data ie data in the global scope

console.log(finalBugdet);

console.log(newBudget3);

const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');

  // .reduce(
  //   (string, currentString) =>
  //     `${string} / ${currentString.description.slice(-2)}`,
  //   ''
  // );

  // let output = '';
  // for (const entry of budget) {
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : ''; // Emojis are 2 chars
  // }
  // output = output.slice(0, -2); // Remove last '/ '
  console.log(bigExpenses);
};

// console.log(budget);

logBigExpenses(finalBugdet, 500);
