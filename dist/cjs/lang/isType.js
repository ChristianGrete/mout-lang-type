var typeOf = require("./typeOf");

function isType($value, $type) {
  return typeOf($value) === $type;
}

isType.prototype = null;

module.exports = isType;