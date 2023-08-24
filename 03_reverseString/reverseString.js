const reverseString = function (string) {
  const stringLength = string.length;
  let result = "";
  for (let i = stringLength - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
};


// Do not edit below this line
module.exports = reverseString;
