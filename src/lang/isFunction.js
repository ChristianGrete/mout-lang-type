/**
 * @author Christian Grete <webmaster@christiangrete.com>
 * @copyright &copy; 2015 Christian Grete
 * @file Provides the [isFunction]{@link module:mout-lang-type.lang.isFunction} utility
 * @license MIT
 */

define(
  [
    './isType'
  ],
  function ( isType ) {

    /**
     * Returns whether the passed value is a function
     * @author Christian Grete <webmaster@christiangrete.com>
     * @function module:mout-lang-type.lang.isFunction
     * @license MIT
     * @param {mixed} $value The <code>object</code> or <code>primitive</code> whose type is to be checked
     * @requires module:mout-lang-type.lang.isType
     * @returns {boolean} A <code>boolean</code> indicating whether the passed argument is a function
     * @summary Checks whether a value is a function
     */

    function isFunction ( $value ) {
      return isType(
          $value,
          'function'
        )
    }

    isFunction.prototype = null;

    return isFunction
  }
)
