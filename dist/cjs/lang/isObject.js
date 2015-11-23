var isType = require("./isType");

function isObject($value) {
  return isType($value, "object");
}

isObject.prototype = null;

module.exports = isObject;