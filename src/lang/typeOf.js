/**
 * @author Christian Grete <webmaster@christiangrete.com>
 * @copyright &copy; 2015 Christian Grete
 * @file Provides the [typeOf]{@link module:mout-lang-type.lang.typeOf} utility
 * @license MIT
 * @since 0.0.1
 */

// Annotations:
//   1. `RegExp` objects are functions in Safari/iOS < 6 and Android < 4
//   2. `arguments` has no built-in tag in MSIE < 8
//   3. Functionish host objects have no built-in tags in MSIE < 9
//   4. `Symbol` values have no built-in tags in some edge cases

define(
  function () {
    var
      _argumentsIsObject = false,
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
      _objectHasNoCreateMethod = typeof Object.create !== 'function',
      _pattern,
      _prototype = String.prototype,
      _charAt = _prototype.charAt,
      _retestIfObject,
      _slice = _prototype.slice,
      _symbolsHaveNoBuiltInTags = false,
      _toLowerCase = _prototype.toLowerCase,
      _toString = _conversionObject.toString;

    if( typeof Symbol === 'function')
      _length = _builtInTags.push('Symbol'),
      _symbolsHaveNoBuiltInTags = typeof Symbol.iterator !== 'symbol';

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
              )
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
            )
        }
    }

    if( _objectHasNoCreateMethod ) {
      _pattern = /^[\s[]?function/,

      _retestIfObject = function ( $value, $type ) {
          return (
              $type === 'object'
                && _pattern.test( $value + '' )
              ?
                'function' :
                  $type
            )
        }
    }

    /**
     * Returns the type of the passed value
     * @author Christian Grete <webmaster@christiangrete.com>
     * @function module:mout-lang-type.lang.typeOf
     * @license MIT
     * @param {mixed} $value The <code>object</code> or <code>primitive</code> whose type is to be returned
     * @returns {string} A <code>string</code> indicating the type of the passed argument
     * @since 0.0.1
     * @summary Gets the type of a value
     * @throws {typeError} Exactly 1 argument <code>$value</code> expected
     */

    function typeOf ( $value ) {
      var
        _length = arguments.length,
        _type;

      if( _length !== 1 )
        throw TypeError(
            'Function "typeOf" expects exactly 1 argument "$value", '
              + _length
              + ' argument(s) were passed'
          );

      if( $value == null )
        return $value + '';

      return (
          typeof $value === 'object'
            || typeof $value === 'function' // 1
          ?
            (
              _argumentsIsObject // 2
                && _isArguments( $value )

              ||

              (
                _type = _conversionObject[ _toString.call($value) ],

                _objectHasNoCreateMethod // 3
              )
                && _retestIfObject(
                  $value,
                  _type
                )

              ||

              (
                _symbolsHaveNoBuiltInTags // 4
                  && $value.constructor === Symbol
                ?
                  'symbol' :
                    _type
              )

              ||

              'object'
            ) :
              typeof $value
        )
    }

    typeOf.prototype = null;

    return typeOf
  }
)
