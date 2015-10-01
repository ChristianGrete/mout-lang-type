/**
 * @author Christian Grete <webmaster@christiangrete.com>
 * @copyright &copy; 2015 Christian Grete
 * @file Provides the [isType]{@link module:mout-lang-type.lang.isType} utility
 * @license MIT
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
     * @summary Checks whether a value is of a type
     */

    return function isType ( $value, $type ) {
        return typeOf( $value ) === $type;
      };
  }
);
