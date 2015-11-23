define([ "./isType" ], function(isType) {
  function isFunction($value) {
    return isType($value, "function");
  }
  isFunction.prototype = null;
  return isFunction;
});