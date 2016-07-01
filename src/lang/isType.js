/**
 * @author Christian Grete <webmaster@christiangrete.com>
 * @copyright &copy; 2015 Christian Grete
 * @file Provides the [isType]{@link module:mout-lang-type.lang.isType} utility
 * @license MIT
 * @since 0.0.1
 */

define(
  [
    './typeOf'
  ],
  function ( typeOf ) {

    /**
     * Returns whether the passed value is of the specified type
     * @author Christian Grete <webmaster@christiangrete.com>
     * @function module:mout-lang-type.lang.isType
     * @license MIT
     * @param {mixed} $value The <code>object</code> or <code>primitive</code> whose type is to be compared
     * @param {string} $type The <code>string</code> indicating the type to be compared against
     * @requires module:mout-lang-type.lang.typeOf
     * @returns {boolean} A <code>boolean</code> indicating the result of the type comparison
     * @since 0.0.1
     * @summary Checks whether a value is of a type
     * @throws {typeError} Exactly 2 arguments <code>$value</code> and <code>$type</code> expected
     * @throws {typeError} Primitive <code>string</code> value for argument 1 <code>$value</code> expected
     */

    function isType ( $value, $type ) {
      var
        _length = arguments.length;

      if( _length !== 2 )
        throw TypeError(
          'Function `isType` expects exactly 2 arguments (`$value` and `$type`), '
            + _length
            + ' argument'
            + (
                _length < 2 ?
                  ' has' :
                    's have'
              )
            + ' been passed.'
        );

      if( typeof $type !== 'string')
        throw TypeError(
          'Function `isType` expects `arguments[1]` (`$type`) to have a primitive string value.'
        );

      return typeOf( $value ) === $type
    }

    isType.prototype = null;

    return isType
  }
)
