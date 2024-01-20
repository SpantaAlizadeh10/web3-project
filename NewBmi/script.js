const mark = {
  fullName: "mark Miller",
  mass: 78,
  height: 198,

  calcbmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "john smith",
  mass: 88,
  height: 1.96,

  calcbmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcbmi();
john.calcbmi();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}s bmi (${mark.bmi})is higher than ${john.fullName}s bmi (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}s bmi (${john.bmi})is higher than ${mark.fullName}s bmi (${mark.bmi})`
  );
}
