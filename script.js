'use strict';

//Softener Resin Calculators

// Calculating Softener Capacity

const softenerCapacity = function () {
  const resin = document.querySelector('.resin').value;
  const exchange = document.querySelector('.exchange').value;
  const hardness = document.querySelector('.hardness').value;
  if (!resin || !hardness) {
    alert(`Please fill in Resin Volume and Hardness`);
  } else {
    document.querySelector('.capacity').value = (resin * exchange) / hardness;
  }
};

// const softenerCapacity = function (resinVolume, hardness) {
//   let exchange = 50;
//   return (resinVolume * exchange) / hardness;
// };
// let softener = softenerCapacity(50, 200);
// console.log(softener);

//Brine Volume Calculation

const brineCalculation = function () {
  const resinVolume = document.querySelector('.resinVolume').value;
  const regenLevel = document.querySelector('.regenLevel').value;
  if (!resinVolume) {
    alert(`Please fill in Resin Volume `);
  } else {
    document.querySelector('.minSalt').value =
      (resinVolume * regenLevel) / 1000;
    document.querySelector('.minBrine').value = (
      ((resinVolume * regenLevel) / 1000) *
      3.2
    ).toFixed(2);
  }
};

// const brine = function (resinVolume1) {
//   let regenerationLevel = 120;

//   return resinVolume1 * regenerationLevel;
// };
// let salt = brine(50) / 1000;
// let brineVolume = 3.2;
// let minBrineVol = (salt * brineVolume).toFixed(2);

// console.log(salt + ' kg');
// console.log(minBrineVol);

// Calculating RO Recovery

const roRecovery = function () {
  const permFlow = document.querySelector('.permFlow').value;
  const feedFlow = document.querySelector('.feedFlow').value;
  if (!permFlow || !feedFlow) {
    alert(`Please fill in Permeate Flow and Feed Flow`);
  } else {
    document.querySelector('.recovery').value = (
      (permFlow / feedFlow) *
      100
    ).toFixed(0);
  }
};

// const roRecovery = function (permFlow, feedFlow) {
//   return (permFlow / feedFlow) * 100;
// };
// let percenatge = roRecovery(40, 65);
// console.log(percenatge);

// // Calculating RO Rejection

const roRejection = function () {
  const permCond = document.querySelector('.permCond').value;
  const feedCond = document.querySelector('.feedCond').value;
  if (!permCond || !feedCond) {
    alert(`Please fill in Permeate Conductivity and Feed Conductivity`);
  } else {
    document.querySelector('.rejection').value = (
      ((feedCond - permCond) / feedCond) *
      100
    ).toFixed(0);
  }
};
// const roRejection = function (feedCond, permCond) {
//   return ((feedCond - permCond) / feedCond) * 100;
// };
// let rejpercentage = roRejection(300, 5).toFixed(2);
// console.log(rejpercentage);

// Convert conductivty to resistivity

const waterQual = function () {
  const cond = document.querySelector('.cond').value;

  document.querySelector('.res').value = (1 / cond).toFixed(5);
};

/*
// Print numbers 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Print odd numbers less than 100;
for (let i = 1; i < 100; i += 2) {
  console.log(i);
}

//Multiplication Tables
for (let i = 1; i <= 10; i++) {
  for (let n = 2; n <= 12; n++) console.log(`${n} * ${i} = ${i * n}`);
}

// Calculate sum of numbers 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// Calculate the sum of odd numbers up to 30
let sumOdd = 0;
for (let i = 11; i <= 30; i += 2) {
  sumOdd += i;
}
console.log(sumOdd);

//Create a function thta will convert Celcius to Farenheight

const celcius = function (temp) {
  return temp * 1.8 + 32;
};
let farenheight = celcius(20);
console.log(farenheight);

// Calculate the sum of numbers in an array of numbers
const array = [2, 3, -1, 5, 7, 9, 10, 15, 95];
let sumArr = 0;
for (let i = 0; i < array.length; i++) {
  sumArr += array[i];
}
console.log(sumArr);

//Calculate the average numbers in an array of numbers
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let avgArr = 0;
for (let i = 0; i < arr.length; i++) {
  avgArr += arr[i] / arr.length;
}
console.log(avgArr);


// Create a function that recieves an array of numbers and retiurns an arry of only positive numbers
const array = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

const getPositiveNumbers = function () {
  let arrPos = [];
  for (let i = 0; i <= array.length; i++) {
    if (array[i] >= 0) {
      arrPos.push(array[i]);
    }
  }
  return arrPos;
};
let arrPos = getPositiveNumbers();
console.log(arrPos);

// Find Max number in an array of numbers
const ar1 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
const maxNumber = function () {
  let max = [0];
  for (let i = 0; i < ar1.length; i++) {
    if (ar1[i] > max) {
      max = ar1[i];
    }
  }
  return max;
};
let max = maxNumber();
console.log(max);
*/

// sort array into asending order
/*
const arr = [7, 2, 8, 1, 3, 4];
console.log(arr);

let arrayNumbers = arr.sort();
console.log(arrayNumbers);
*/

// Codecademy course

const kelvin = 300;
let celcius = kelvin - 273;
console.log(celcius);
// celcius is 273 less than kelvin

let farenheight = celcius * (9 / 5) + 32;
console.log(
  `The temperature is ${Math.floor(farenheight)} degrees farenheight`
);

const myAge = 43;

let earlyYears = 2;

earlyYears *= 10.5;

let laterYears = myAge - 2;

laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

const myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);

const myName = 'Gareth Scully'.toLowerCase();

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`
);

//if else statements
let sale = false;
if (sale === true) {
  console.log('Time to buy');
} else {
  console.log('Time to wait for a sale');
}

let hungerLevel = 6;
if (hungerLevel >= 7) {
  console.log('Time to Eat!');
} else {
  console.log('We can eat Later!');
}

let mood = 'energetic';
let tirednessLevel = 9;

if ((mood === 'sleepy') & (tirednessLevel > 8)) {
  console.log('Time to Sleep');
} else {
  console.log('Not bed time Yet');
}

let wordCount = 0;
if (wordCount) {
  console.log('Great! You have started your work!');
} else {
  console.log('Better Get to work');
}

// Falsey and Truthy

let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// Ternary Operator

let isLocked = true;

isLocked
  ? console.log('You will need a key to open the door.')
  : console.log('The door is open');

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// else if statements
let season = '';

if (season === 'spring') {
  console.log("It's spring! The trees are budding!");
} else if (season === 'winter') {
  console.log("It's winter! Everything is covered in snow.");
} else if (season === 'autumn') {
  console.log("It's fall! Leaves are falling!");
} else if (season === 'summer') {
  console.log("It's sunny and warm because it's summer!");
} else {
  console.log('Invalid Season');
}

// the switch statement
let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}

//Magic EIght Ball

const userName = 'Gareth';

userName ? console.log('Hello Gareth!') : console.log('Hello');

const userQuestion = 'Will I Get a New Job?';
console.log(`${userName} has asked, ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}
// if (randomNumber === 0) {
//   eightBall = 'It is certain';
// } else if (randomNumber === 1) {
//   eightBall = 'It is decidedly so';
// } else if (randomNumber === 2) {
//   eightBall = 'Replay Hazy try again';
// } else if (randomNumber === 3) {
//   eightBall = 'Cannot Predict now';
// } else if (randomNumber === 4) {
//   eightBall = 'Do not count on it';
// } else if (randomNumber === 5) {
//   eightBall = 'My Sources say no';
// } else if (randomNumber === 6) {
//   eightBall = 'Outlook not so good';
// } else {
//   eightBall = 'Signs Point to Yes';
// }

console.log(`The Magic 8 ball says ${eightBall}`);

// Race Day

let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistration = true;

let runnersAge = 18;

if (runnersAge > 18 && earlyRegistration) {
  raceNumber += 1000;
}

if (runnersAge > 18 && earlyRegistration) {
  console.log(`${raceNumber} will race at 9.30am`);
} else if (runnersAge >= 18 && !earlyRegistration) {
  console.log(`Runner ${raceNumber} will race at 11am`);
} else if (runnersAge < 18) {
  console.log(`Youth Runner ${raceNumber} will race at 12.30pm`);
} else {
  console.log(`Please approach the registration desk, thanks!`);
}

//Functions

function getReminder() {
  console.log('Water the Plants');
}
function greetInSpanish() {
  console.log('Buenas Tardes.');
}
getReminder(); //calling the function
greetInSpanish(); // calling the function

function sayThanks(name) {
  console.log(
    `Thank you for your purchase ${name}! We appreciate your business`
  );
}
sayThanks('Gareth');

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item2}`);
}
makeShoppingList();

function monitorCount(rows, columns) {
  return rows * columns;
}
const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);

//Helper Functions
function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);
console.log(totalCost);

//Function Expression
// const plantNeedsWater = function (day) {
//   if (day === 'Wednesday') {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(plantNeedsWater('Wednesday'));

//Arrow Functions
const plantNeedsWater = day => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
console.log(plantNeedsWater('Wednesday'));
