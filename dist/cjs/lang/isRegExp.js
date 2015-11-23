var isType = require("./isType");

function isRegExp($value) {
  return isType($value, "regExp");
}

isRegExp.prototype = null;

module.exports = isRegExp;