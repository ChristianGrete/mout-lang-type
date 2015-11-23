define([ "./isType" ], function(isType) {
  function isObject($value) {
    return isType($value, "object");
  }
  isObject.prototype = null;
  return isObject;
});