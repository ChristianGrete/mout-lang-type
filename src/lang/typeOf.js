/**
 * @author Christian Grete <webmaster@christiangrete.com>
 * @copyright &copy; 2015 Christian Grete
 * @file Provides the [typeOf]{@link module:mout-lang-type.lang.typeOf} utility
 * @license MIT
 */

define(
  [
    './isPrimitive'
  ],
  function ( isPrimitive ) {
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
      _isArguments,
      _length = _builtInTags.length,
      _prototype = String.prototype,
      _charAt = _prototype.charAt,
      _slice = _prototype.slice,
      _toLowerCase = _prototype.toLowerCase,
      _toString = _conversionObject.toString;

    if( typeof Symbol === 'function') {
      _length = _builtInTags.push('Symbol');
    }

    while( _length -- ) {
      _builtInTag = _builtInTags[ _length ],

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
      _argumentsIsObject
        = _conversionObject[ _toString.call(arguments) ] !== 'arguments'
    ) {
      _hasOwnProperty = _conversionObject.hasOwnProperty,

      _isArguments = function ( $value ) {
          return (
              _hasOwnProperty.call(
                $value,
                'callee'
              ) ?
                'arguments' :
                  false
            );
        };
    }

    /**
     * Returns the type of the passed value
     * @author Christian Grete <webmaster@christiangrete.com>
     * @function module:mout-lang-type.lang.typeOf
     * @license MIT
     * @param {mixed} $value The <code>object</code> or <code>primitive</code> whose type is to be returned
     * @requires module:mout-lang-type.lang.isPrimitive
     * @returns {string} A <code>string</code> indicating the type of the passed argument
     * @summary Gets the type of a value
     */

    return function typeOf ( $value ) {
        if( $value == null ) {
          return $value + '';
        }

        return (
            isPrimitive( $value ) ?
              typeof $value :
                (
                  ( _argumentsIsObject && _isArguments($value) )
                    || _conversionObject[ _toString.call($value) ]
                      || 'object'
                )
          );
      };
  }
);
