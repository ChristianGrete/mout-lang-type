define([ "./isType" ], function(isType) {
  function isRegExp($value) {
    return isType($value, "regExp");
  }
  isRegExp.prototype = null;
  return isRegExp;
});