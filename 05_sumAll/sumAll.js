const sumAll = function (a, b) {
  if (a < 0 || b < 0) {
    return "ERROR";
  }
  if (typeof a != "number" || typeof b != "number") {
    return "ERROR";
  }
  const start = a <= b ? a : b;
  const end = start === a ? b : a;

  const sumArr = [...Array(end + 1).keys()].filter(
    (i) => ![...Array(start).keys()].includes(i)
  );
  let sum = 0;
  sumArr.forEach((i) => (sum += i));
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
