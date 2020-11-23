// let js = 'amazing';
// if (js === 'amazing') alert('JavaScript is FUN!');

// let country = 'United States';
// let continent = 'North America';
// let population = '320,000,000';

// console.log(country);
// console.log(continent);
// console.log(population);

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// let markBMI = markMass / markHeight ** 2;
// let johnBMI = johnMass / johnHeight ** 2;

// const markHigherBMI = markBMI > johnBMI;

// console.log(markBMI);
// console.log(johnBMI);
// console.log(markHigherBMI);

// const averageScoreDolphins = (96 + 108 + 89) / 3;
// const averageScoreKoalas = (88 + 91 + 110) / 3;

// if (averageScoreDolphins > averageScoreKoalas) {
//     console.log('The Dolphins win.');
// } else if (averageScoreKoalas > averageScoreDolphins) {
//     console.log('The Koalas win.');
// } else {
//     console.log('It looks like a tie.')
// }


// const averageScoreDolphins = (97 + 112 + 101) / 3;
// const averageScoreKoalas = (109 + 95 + 123) / 3;

// if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins > 100) {
//     console.log('The Dolphins win.', averageScoreDolphins);
// } else if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas > 100) {
//     console.log('The Koalas win.', averageScoreKoalas);
// } else {
//     console.log('It looks like a tie.', averageScoreDolphins, averageScoreKoalas)
// }

const meal = 40;
const tip = meal >= 50 && meal <= 300 ? .2 : .15;
const total = meal * tip + meal;

console.log(total);