define(function() {
  function isPrimitive($value) {
    switch (typeof $value) {
     case "boolean":
     case "number":
     case "string":
     case "symbol":
      return true;
    }
    return $value == null;
  }
  isPrimitive.prototype = null;
  return isPrimitive;
});