var isType = require("./isType");

function isFunction($value) {
  return isType($value, "function");
}

isFunction.prototype = null;

module.exports = isFunction;