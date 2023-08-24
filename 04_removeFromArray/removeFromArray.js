const removeFromArray = function (arr, ...remove) {
  return arr.filter((i) => !remove.includes(i));
};


module.exports = removeFromArray;
