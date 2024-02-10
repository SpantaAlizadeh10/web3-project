// const greet = greeting => names =>console.log(`${greeting} ${names}`);

// greet('hi')('jonas')

const lufthansa = {
  airline: "AIRKISH",
  iatacode: "LH",
  booking: [],

  book(flightname, name) {
    console.log(
      `${name}booked a seat on ${this.airline} flight ${this.iatacode}${flightname} `
    );
    // this.booking.push({flight: `$[this.iatacode]${flightname}`,name});

    this.booking.push({ flight: `${this.iatacode}${flightname}`, name });
  },
};

lufthansa.book(524, "ali alizadeh");
lufthansa.book(354, "reza adaso");
console.log(lufthansa);

const Eurowings = {
  airline: "eurowings",
  iatacode: "EW",
  booking: [],
};
const book = lufthansa.book;

//does not work
//book(23,'zahra amani');

//call method
book.call(Eurowings, 23, "zahra amani");
console.log(Eurowings);

book.call(lufthansa, 18, "maryam adas");
console.log(lufthansa);

const Swiss = {
  airline: "Swiss Air",
  iatacode: "KN",
  booking: [],
};

book.call(Swiss, 30, "neda ahmadi");
console.log(Swiss);

//apply method

const flightname = [583, "asal kamin"];
book.apply(Swiss, flightname);
console.log(Swiss);

book.call(Swiss, ...flightname);
