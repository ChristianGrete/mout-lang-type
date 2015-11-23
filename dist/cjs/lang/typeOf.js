var _argumentsIsObject = false, _builtInTag, _builtInTags = [ "Arguments", "Array", "Boolean", "Date", "Error", "Function", "Number", "Object", "RegExp", "String" ], _conversionObject = {}, _hasOwnProperty, _isArguments, _length = _builtInTags.length, _objectHasNoCreateMethod = typeof Object.create !== "function", _pattern, _prototype = String.prototype, _charAt = _prototype.charAt, _retestIfObject, _slice = _prototype.slice, _toLowerCase = _prototype.toLowerCase, _toString = _conversionObject.toString;

if (typeof Symbol === "function") _length = _builtInTags.push("Symbol");

while (_length--) {
  _builtInTag = _builtInTags[_length], _conversionObject["[object " + _builtInTag + "]"] = _toLowerCase.call(_charAt.call(_builtInTag, 0)) + _slice.call(_builtInTag, 1);
}

if (_argumentsIsObject = _conversionObject[_toString.call(arguments)] !== "arguments") {
  _hasOwnProperty = _conversionObject.hasOwnProperty, _isArguments = function($value) {
    return _hasOwnProperty.call($value, "callee") ? "arguments" : false;
  };
}

if (_objectHasNoCreateMethod) {
  _pattern = /^[\s[]?function/, _retestIfObject = function($value, $type) {
    return $type === "object" && _pattern.test($value + "") ? "function" : $type;
  };
}

function typeOf($value) {
  var _type;
  if ($value == null) return $value + "";
  return typeof $value === "object" || typeof $value === "function" ? _argumentsIsObject && _isArguments($value) || (_type = _conversionObject[_toString.call($value)], 
  _objectHasNoCreateMethod) && _retestIfObject($value, _type) || _type || "object" : typeof $value;
}

typeOf.prototype = null;

module.exports = typeOf;