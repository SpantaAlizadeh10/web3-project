const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 10, 15));

//test 1

const scoreDolphins = calcAverage(55, 5, 68);
const scoreKoalas = calcAverage(88, 24, 36);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs.${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas}vs.${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);
