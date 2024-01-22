

const calcTempAmplitude = function temp (t1,t2) {

    const temps = t1.concat(t2);
    console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if(typeof curTemp !== 'number')continue;
    if (curTemp > max) max = curTemp;
    if(curTemp < min) min = curTemp;
  }
  console.log(max,'<==>',min);
  return max-min;
  
};

const ampnew = calcTempAmplitude([2, 8, 7],[8,5,7]);
console.log(ampnew);
