var isPrimitive = require("./isPrimitive");

function isComplex($value) {
  return !isPrimitive($value);
}

isComplex.prototype = null;

module.exports = isComplex;