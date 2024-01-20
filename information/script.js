const sara = {
  firstName: "sara",
  lastName: "alizadeh",
  age: 2017 - 1999,
  job: "teacher",
  friends: ["reza", "hamid", "saeed"],
};

console.log(sara);
console.log(sara.lastName);
console.log(sara["lastName"]);

const nameKey = "Name";
console.log(sara["first" + nameKey]);
console.log(sara["last" + nameKey]);

sara.location = "tehran";
sara["twitter"] = "@saragggd";
console.log(sara);

const interestingIn = prompt(
  "what do you want to know about sepanta? choose betwen firstName,lastName,age,job,location,twitter,and friends"
);

if (sara[interestingIn]) {
  console.log(sara[interestingIn]);
} else {
  console.log(
    "wrong request! choose betwen firstName,lastName,age,job,and friends"
  );
}

console.log(
  `${sara.firstName} has ${sara.friends.length} friends,and his best friend is called ${sara.friends[0]}`
);
