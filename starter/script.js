'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//////////////////////////////////////////////////////

btnLogin.addEventListener('click', function () {
  const user = inputLoginUsername.value;
  const pin = Number(inputLoginPin.value);
  for (const userDetail of accounts) {
    if (user === userGenerator(userDetail.owner) && pin === userDetail.pin) {
      alert('yoooooooooo');
      break;
    } else continue;
  }
});

const userGenerator = function (str) {
  const strArr = str.toLowerCase().split(' ');
  let userStr = '';
  strArr.forEach(function (word) {
    userStr += word[0];
  });
  return userStr;
};
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
//SLICE does not alter original array
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-2, -4));
console.log(arr.slice(-2, -1));
console.log(arr.slice(1, -2));
console.log(arr.slice(0)); //shallow copy of array, like [...arr]
console.log(arr.slice(1, -2));
console.log(arr);

//SPLICE alters original array
// console.log(arr.splice(2));
console.log(arr);
//splice can be used to remove elements from array
//second parameter is number of elements to delete
arr.splice(1, 2);
console.log(arr); //works also if variable is const type

//REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2); //alters the original array

//CONCAT
const arr3 = arr.concat(arr2);
// console.log(arr3);
const arr4 = arr2.concat(arr);
// console.log(arr4);
const arr5 = arr.concat(arr2, arr, ['is the ok']);
// console.log(arr5);

//JOIN
console.log(arr3.join(' - '));


//foreach loop

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(function (curElement, index, entireArray) {
  //these are the 3 arguments the forEach method passes in the callback function
  if (curElement > 0)
    console.log(`${index + 1} : Deposited ${curElement}; [${entireArray}]`);
  else
    console.log(
      `${index + 1} : Withdrew ${Math.abs(curElement)}; ${entireArray}`
    );
}); //no need to use or specify all three
//you CANNOT break out of a forEach loop


//forEach with maps and sets
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, entireMap) {
  console.log(key, value, entireMap);
});

const currUnique = new Set(['usd', 'gbp', 'usd', 'eur', 'eur']);
console.log(currUnique);
currUnique.forEach(function (value, key, set) {
  console.log(key, value, set); //in sets, there are no keys or indexes. So developers made it such that for sets the key and value will be same
});
*/
