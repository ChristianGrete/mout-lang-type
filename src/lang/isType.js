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
     */

    function isType ( $value, $type ) {
      // TODO:
      // if( arguments.length !== 2 ) { throw TypeError(); }
      // if( typeof $type !== 'string') { throw TypeError(); }

      return typeOf( $value ) === $type
    }

    isType.prototype = null;

    return isType
  }
)
