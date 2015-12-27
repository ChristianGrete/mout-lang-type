/**
 * @author Christian Grete <webmaster@christiangrete.com>
 * @copyright &copy; 2015 Christian Grete
 * @file Provides the [isComplex]{@link module:mout-lang-type.lang.isComplex} utility
 * @license MIT
 * @since 0.6.0
 */

define(
  [
    './isPrimitive'
  ],
  function ( isPrimitive ) {

    /**
     * Returns whether the passed value is of a complex data type
     * @author Christian Grete <webmaster@christiangrete.com>
     * @function module:mout-lang-type.lang.isComplex
     * @license MIT
     * @param {mixed} $value The <code>object</code> or <code>primitive</code> whose data type is to be checked
     * @requires module:mout-lang-type.lang.isPrimitive
     * @returns {boolean} A <code>boolean</code> indicating whether the passed argument has a complex value
     * @since 0.6.0
     * @summary Checks whether a value is complex
     */

    function isComplex ( $value ) {
      return !isPrimitive( $value )
    }

    isComplex.prototype = null;

    return isComplex
  }
)
