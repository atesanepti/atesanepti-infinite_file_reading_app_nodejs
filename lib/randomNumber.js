const randomNumber = {};

// Random Number Object - Module scaffolding
randomNumber.randomNumByRange = (min, max) => {
  let minNum = typeof min == "number" ? min : 0;
  let maxNum = typeof max == "number" ? max : 0;
  return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
};

module.exports = randomNumber;
