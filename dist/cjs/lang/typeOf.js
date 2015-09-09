
    var
      _argumentsIsObject,
      _builtInTag,
      _builtInTags = [
          'Arguments',
          'Array',
          'Boolean',
          'Date',
          'Error',
          'Function',
          'Number',
          'Object',
          'RegExp',
          'String'
        ],
      _conversionObject = {},
      _hasOwnProperty,
      _index = 0,
      _isArguments,
      _length = _builtInTags.length,
      _prototype = String.prototype,
      _charAt = _prototype.charAt,
      _slice = _prototype.slice,
      _toLowerCase = _prototype.toLowerCase,
      _toString = _conversionObject.toString;

    for( ; _index < _length; _index ++ ) {
      _builtInTag = _builtInTags[ _index ],

      _conversionObject[
        '[object '
          + _builtInTag
          + ']'
      ]
        = _toLowerCase.call(
            _charAt.call(
              _builtInTag,
              0
            )
          )
            + _slice.call(
                _builtInTag,
                1
              );
    }

    if(
      _argumentsIsObject = _conversionObject[ _toString.call(arguments) ] !== 'arguments'
    ) {
      _hasOwnProperty = _conversionObject.hasOwnProperty,

      _isArguments = function ( $mixed ) {
          return (
              _hasOwnProperty.call(
                $mixed,
                'callee'
              ) ?
                'arguments' :
                  false
            );
        };
    }

    module.exports = function typeOf ( $mixed ) {
        if( $mixed == null ) {
          return $mixed + '';
        }

        return (
            typeof $mixed === 'object'
              || typeof $mixed === 'function' ?
                (
                  ( _argumentsIsObject && _isArguments() )
                    || _conversionObject[ _toString.call($mixed) ]
                      || 'object'
                ) :
                  typeof $mixed
          );
      };
  
