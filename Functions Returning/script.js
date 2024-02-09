const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("ali");
greeterHey("reza");

greet("Hello")("reza");

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr("Hi")("reza");
