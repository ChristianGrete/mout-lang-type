/**
 * @author Garrick Cheung <garrick@garrickcheung.com>
 * @author Christian Grete <webmaster@christiangrete.com>
 * @copyright &copy; 2014 Garrick Cheung &amp; Christian Grete
 * @file Provides the [isPrimitive]{@link module:mout-lang-type.lang.isPrimitive} utility
 * @license MIT
 */

define(
  function () {

    /**
     * Returns whether the passed value is of a primitive data type
     * @author Garrick Cheung <garrick@garrickcheung.com>
     * @author Christian Grete <webmaster@christiangrete.com>
     * @function module:mout-lang-type.lang.isPrimitive
     * @license MIT
     * @param {mixed} $value The <code>object</code> or <code>primitive</code> whose data type is to be checked
     * @returns {boolean} A <code>boolean</code> indicating whether the passed argument has a primitive value
     * @see [<code>mout/lang/isPrimitive</code>]{@link https://github.com/mout/mout/commit/1b31347}
     * @summary Checks whether a value is primitive
     */

    function isPrimitive ( $value ) {
      switch( typeof $value ) {
        case 'boolean':
        case 'number':
        case 'string':
        case 'symbol':
          return true
      }

      return $value == null
    }

    isPrimitive.prototype = null;

    return isPrimitive
  }
)
