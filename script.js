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

