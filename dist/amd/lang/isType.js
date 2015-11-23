define([ "./typeOf" ], function(typeOf) {
  function isType($value, $type) {
    return typeOf($value) === $type;
  }
  isType.prototype = null;
  return isType;
});