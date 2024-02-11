'use strict';
// const greet = greeting => names =>console.log(`${greeting} ${names}`);

// greet('hi')('jonas')

const lufthansa = {
  airline: 'AIRKISH',
  iatacode: 'LH',
  booking: [],

  book(flightname, name) {
    console.log(
      `${name}booked a seat on ${this.airline} flight ${this.iatacode}${flightname} `
    );
    // this.booking.push({flight: `$[this.iatacode]${flightname}`,name});

    this.booking.push({ flight: `${this.iatacode}${flightname}`, name });
  },
};

lufthansa.book(524, 'ali alizadeh');
lufthansa.book(354, 'reza adaso');
console.log(lufthansa);

const Eurowings = {
  airline: 'eurowings',
  iatacode: 'EW',
  booking: [],
};
const book = lufthansa.book;

//does not work
//book(23,'zahra amani');

//call method
book.call(Eurowings, 23, 'zahra amani');
console.log(Eurowings);

book.call(lufthansa, 18, 'maryam adas');
console.log(lufthansa);

const Swiss = {
  airline: 'Swiss Air',
  iatacode: 'KN',
  booking: [],
};

book.call(Swiss, 30, 'neda ahmadi');
console.log(Swiss);

//apply method

const flightname = [583, 'asal kamin'];
book.apply(Swiss, flightname);
console.log(Swiss);

book.call(Swiss, ...flightname);

// book.call(eurowings,23,"sara wiliams")

const bookEW = book.bind(Eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(Swiss);

bookEW(23, 'sepanta alizadeh ');
bookLX(22, 'elahe kalantari ');

const bookEWQ = book.bind(Eurowings, 23);
bookEWQ('samane aghayi ');

// with event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++, console.log(this.planes);
};

// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
console.log(addVat(100));
console.log(addVat(20));

const addtaxrate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addvat2 = addTax.bind(null, 0.23);
console.log(addvat2(100));
console.log(addvat2(20));
