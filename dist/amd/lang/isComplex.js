define([ "./isPrimitive" ], function(isPrimitive) {
  function isComplex($value) {
    return !isPrimitive($value);
  }
  isComplex.prototype = null;
  return isComplex;
});