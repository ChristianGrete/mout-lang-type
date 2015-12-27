/**
 * @author Christian Grete <webmaster@christiangrete.com>
 * @copyright &copy; 2015 Christian Grete
 * @file Provides the [isRegExp]{@link module:mout-lang-type.lang.isRegExp} utility
 * @license MIT
 * @since 0.6.0
 */

define(
  [
    './isType'
  ],
  function ( isType ) {

    /**
     * Returns whether the passed value is a regular expression object
     * @author Christian Grete <webmaster@christiangrete.com>
     * @function module:mout-lang-type.lang.isRegExp
     * @license MIT
     * @param {mixed} $value The <code>object</code> or <code>primitive</code> whose type is to be checked
     * @requires module:mout-lang-type.lang.isType
     * @returns {boolean} A <code>boolean</code> indicating whether the passed argument is a regular expression
     * @since 0.6.0
     * @summary Checks whether a value is a regular expression
     */

    function isRegExp ( $value ) {
      return isType(
          $value,
          'regExp'
        )
    }

    isRegExp.prototype = null;

    return isRegExp
  }
)
