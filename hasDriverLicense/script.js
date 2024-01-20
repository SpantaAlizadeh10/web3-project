const sara = {
  firstName: "sara",
  lastName: "sadri",
  birthYeah: 1999,
  job: "toutor",
  friends: ["zahra", "shiva", "maryam"],
  hasDriverLicense: false,

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} -years old ${
      sara.job
    }, and she has ${this.hasDriverLicense ? "a" : "no"} drivers license`;
  },
};

console.log(sara.calcAge());
console.log(sara.age);

console.log(sara.getSummary());
