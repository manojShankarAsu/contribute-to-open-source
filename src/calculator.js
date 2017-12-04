exports._check = (x, y) => {
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
};

exports.add = (x, y) => {
  return exports._check(x, y) || (x + y);
};

exports.subtract = (x, y) => {
  return exports._check(x, y) || (x - y);
};

exports.multiply = (x, y) => {
  return exports._check(x, y) || (x * y);
};

exports.divide = (x, y) => {
  return exports._check(x, y) || (x / y);
};

module.exports = exports;
