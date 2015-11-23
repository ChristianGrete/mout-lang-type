var _objectHasNoCreateMethod = typeof Object.create !== "function";

function instanceOf($value, $constructor) {
  if ($value == null) return false;
  if (typeof $value !== "object" && typeof $value !== "function") $value = Object($value);
  return _objectHasNoCreateMethod && !$value.valueOf ? false : $value instanceof $constructor;
}

instanceOf.prototype = null;

module.exports = instanceOf;