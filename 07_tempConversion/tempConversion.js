function round(number, decimals) {
  let factor = 10 ** decimals;
  return Math.round(number * factor) / factor
};

const convertToCelsius = function (farenTemp) {
  let temp = (5 / 9) * (farenTemp - 32) 
  return round(temp, 1) 
};

const convertToFahrenheit = function (celciusTemp) {
  let temp = (9 / 5) * celciusTemp + 32;
  return round(temp, 1) 
};

console.log(convertToCelsius(69));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
