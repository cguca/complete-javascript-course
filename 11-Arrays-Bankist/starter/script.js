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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function(movements, sort = false) {

  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function(mvnt, idx) {
    const type = mvnt > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${idx + 1} ${type}</div>
        <div class="movements__value">${mvnt} €</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin',html);
  });
}
  

const calcDisplaySummary = function(account) {

  const income = account.movements
    .filter(mov => mov >= 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${income} €`;

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(out)} €`

  const interest = account.movements
    .filter(mov => mov >= 0)
    .map(deposit => deposit * account.interestRate / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest} €`;
}





const createUserNames = function(accts) {
  accts.forEach(function(acct) {
    acct.username = acct.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  });

 
}

createUserNames(accounts);
console.log(accounts);

const calcDisplayBalance = function(account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance} €`;
}



let currentAccount;
btnLogin.addEventListener('click', function(e) {
  e.preventDefault();

  currentAccount = accounts.find(account => account.username === inputLoginUsername.value);
  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome Back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

const updateUI = function(acct) {

  displayMovements(acct.movements);
  calcDisplayBalance(acct);
  calcDisplaySummary(acct);
}
btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();

  const amountTransfer = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(account => account.username === inputTransferTo.value);

  inputTransferTo.value = inputTransferAmount.value = '';

  if(amountTransfer > 0 
    && receiverAccount
    && currentAccount.balance >= amountTransfer 
    && currentAccount?.username !== receiverAccount.username) {
      currentAccount.movements.push(-amountTransfer);
      receiverAccount.movements.push(amountTransfer);
      updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const loanAmount = Number(inputLoanAmount.value);
  if(loanAmount > 0 && currentAccount.movements.some(mov => mov >= loanAmount * 0.1)) {
    currentAccount.movements.push(loanAmount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function(e) {
  e.preventDefault(); 

  if(currentAccount.username === inputCloseUsername?.value &&
     currentAccount.pin === Number(inputClosePin?.value)) {

      const index = accounts.findIndex(acc => acc.username === currentAccount.username);
      accounts.splice(index, 1);

      containerApp.style.opacity =0;
    }

    inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})
/////////////////////////////////////////////////

// let arr = ['a','b','c','d','e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));

// console.log(arr.slice());
// console.log([...arr]);

// //console.log(arr.splice(2));
// arr.splice(-1);
// arr.splice(1, 2);
// console.log(arr);

// const arr2 = ['j','i','h','g','f'];
// console.log(arr2.reverse());
// console.log(arr2);


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for(const movement of movements) {
//   console.log((movement));
// }

// movements.forEach(function(movement) {

// })

// Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3] § Data 2: 
// Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// const checkDogs = function(dogsJulia, dogsKate) {

//   const juliaCopy = [...dogsJulia];
//   juliaCopy.splice(0,1);
//   juliaCopy.splice(-2);
 
//   const combined = ([...juliaCopy, ...dogsKate]);
//   console.log(combined);

//   for(const [idx, value] of combined.entries()) {

//     if(value >= 3) {
//       console.log(`Dog number ${idx + 1} is an adult, and is ${value} years old`);
//     } else {
//       console.log(`Dog number ${idx + 1} is still a puppy  `);
//     }
//   };
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// const eurToUsd = 1.1;

// const movementUSD = movements.map( mov => mov * eurToUsd);
// console.log(movementUSD);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// const balance = movements.reduce(function(acc, value, idx, arr) {
//   return acc + value;
// }, 0);
// console.log(balance);

// const maximumValue = movements.reduce(function(acc, value, idx, arr){
//   return acc > value ? acc : value;
// }, movements[0]);
// console.log(maximumValue);

// const calcAverageHumanAge = function(ages) {
//   const humanAges = ages.map(function(value, idx, arr) {
//      return value <= 2 ? value * 2 : value * 4 + 16;
//    })
   
//   const adults = humanAges.filter(function(value, idx, arr) {
//     if(value >= 18) 
//       return value;
//   });
//   const average = adults.reduce(function(acc, value, idx, arr) {
//     return acc + value;
//   }, 0) / adults.length;
  
//   return average;
// };

// const calcAverageHumanAge = ages => 
//   ages
//     .map(age => age <= 2 ? age * 2 : 16+ age * 4)
//     .filter(age => age >= 18)
//     .reduce((acc, adult, idx, arr) => acc + adult / arr.length, 0);

    

// console.log(calcAverageHumanAge([5,2,4,1,15,8,3]));
// console.log(calcAverageHumanAge([16,6,10,5,6,1,4]));

const totalBalance = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
console.log(totalBalance);

// console.log(movements);
// movements.sort((a, b) => {
//   if(a > b)
//     return 1;
//   if(a < b)
//     return -1;
// })

movements.sort((a, b) => a - b);
// console.log(movements);

// descending
// movements.sort((a, b) => {
//   if(a > b)
//     return -1;
//   if(a < b)
//     return 1;
// })
movements.sort((a, b) => b - a);
// console.log(movements);

const y = Array.from({length : 7}, (_, i) => i + 1);
// console.log(y);
labelBalance.addEventListener('click', function() {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace('€', '')));

  // console.log(movementsUI);
})

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] }, 
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] }, 
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(value => value.recommendedFood = Math.trunc(value.weight ** 0.75 * 28));
console.log(dogs);

const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDog);

const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).map(dog => dog.owners).flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood).map(dog => dog.owners).flat();
console.log(ownersEatTooLittle);

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much.`)

console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little.`)

console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

const checkEatingOK = dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1;
console.log(dogs.some(checkEatingOK));

console.log(dogs.filter(checkEatingOK));

const dogsSorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);