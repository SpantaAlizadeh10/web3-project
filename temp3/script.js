// const calcTempAmplitude = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, '<==>', min);
//   return max - min;
// };

// const ampnew = calcTempAmplitude([2, 15, 7], [7, 12, 9]);
// console.log(ampnew);

let forc = function printForecast(arr1, arr2) {
  const temp = arr1.concat(arr2);
  console.log(temp);
  let max = temp[0];

  for (let i = 0; i < temp.length; i++) {
    if (temp > max) max = temp;
    console.log(`${i[0]}oc in 1 days ${i[1]} oc in 2 days ${i[2]}oc in 3 days`);
  }

  printForecast([17, 21, 23], [12, 5, -5, 0, 4]);

  console.log(temp);
};
