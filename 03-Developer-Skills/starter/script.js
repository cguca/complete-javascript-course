// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const printForcast = function (arr) {
  let output = '... ';
  for (let i = 0; i < arr.length; i++) {
    const currentDay = `${arr[i]}ºC in ${i + 1} days ... `;
    output = output.concat(currentDay);
  }
  console.log(output);
};

printForcast([12, 5, -5, 0, 4]);
