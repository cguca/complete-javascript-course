'use strict';

// function logger() {
//     console.log('My name is Jonas');
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const num = Number('23');

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);
// const checkWinner = function (avgDolphins, avgKoalas) {

//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     }
//     console.log('No one wone', avgDolphins, avgKoalas);
// }

// checkWinner(avgDolphins, avgKoalas);

// const calcTip = function (bill) {
//     if (bill >= 50 && bill <= 300) {
//         return bill * 0.20;
//     } else {
//         return bill * 0.15;
//     }
// }
// const tips = [calcTip(125), calcTip(555), calcTip(44)];
// console.log(tips);


// const mark = {
//     fullName: 'Mark Miller',
//     weight: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.BMI = this.weight / (this.height ** 2);
//         return this.BMI;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     weight: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.BMI = this.weight / (this.height ** 2);
//         return this.BMI;
//     }
// };

// console.log(`${mark.calcBMI() > john.calcBMI() ? mark.fullName : john.fullName}'s BMI is higher than ${mark.BMI > john.BMI ? john.fullName : mark.fullName}'s`)

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const calcAvg = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}


console.log(tips);
console.log(bills);
console.log(totals);
console.log(calcAvg(totals));
console.log(calcAvg(tips));