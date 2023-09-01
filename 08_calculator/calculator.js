const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  // Basic
  return arr.reduce(add, 0);

  // // Alternative 1
  // return arr.reduce((a, b) => a + b, 0)

  // // Alternative 2
  // return arr.reduce(function(a, b) {
  //   return a + b
  // }, 0)
};

const multiply = function (arr) {
  return arr.reduce((a, b) => a * b, 1);
};

const power = function (a, b) {
  // a to the power of b
  return a ** b;
};

const factorial = function (a) {
  let result = 1;
  for (let i = a; i > 0; i--) {
    result *= i;
  }
  return result
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
