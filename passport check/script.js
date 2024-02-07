'use strict';
// const bookings=[];

// const createBoking = function (flightNum, numPassengers=1, price=5*numPassengers) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking)
// };

// createBoking('LH2125');
// createBoking('LH2315',10,15)

const flight = 'LH125';
const sepanta = {
  name: 'Sepanta Alizadeh',
  passport: 343585478,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH854';
  passenger.name = 'MR.' + passenger.name;

  if (passenger.passport === 343585478) {
    alert('Checked in');
  } else {
    alert('wrong passport');
  }
};

checkIn(flight, sepanta);
console.log(flight);
console.log(sepanta);

// const flightNum = flight;
// const passenger = sepanta;

// const newPassport = function(peron){
//     peron.passport = Math.trunc(Math.random()*1003232);
// };

// newPassport(sepanta);
// checkIn(flight,sepanta);
