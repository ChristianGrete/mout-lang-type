/**
 * @author Christian Grete <webmaster@christiangrete.com>
 * @copyright &copy; 2015 Christian Grete
 * @file Provides the [isObject]{@link module:mout-lang-type.lang.isObject} utility
 * @license MIT
 */

define(
  [
    './isType'
  ],
  function ( isType ) {

    /**
     * Returns whether the passed value is an object
     * @author Christian Grete <webmaster@christiangrete.com>
     * @function module:mout-lang-type.lang.isObject
     * @license MIT
     * @param {mixed} $value The <code>object</code> or <code>primitive</code> whose type is to be checked
     * @requires module:mout-lang-type.lang.isType
     * @returns {boolean} A <code>boolean</code> indicating whether the passed argument is an object
     * @summary Checks whether a value is an object
     */

    function isObject ( $value ) {
      return isType(
          $value,
          'object'
        )
    }

    isObject.prototype = null;

    return isObject
  }
)
