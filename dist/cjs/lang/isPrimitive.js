/**
 * @author Christian Grete <webmaster@christiangrete.com>
 * @copyright &copy; 2015 Christian Grete
 * @file Provides the [isPrimitive]{@link module:mout-lang-type.lang.isPrimitive} utility
 * @license MIT
 */



    /**
     * Returns whether the passed value is of a primitive data type
     * @author Christian Grete <webmaster@christiangrete.com>
     * @function module:mout-lang-type.lang.isPrimitive
     * @license MIT
     * @param {mixed} $value The <code>object</code> or <code>primitive</code> whose data type is to be checked
     * @returns {boolean} A <code>boolean</code> indicating whether the passed argument is a primitive value
     * @see [mout/lang/isPrimitive]{@link https://github.com/mout/mout/commit/1b31347}
     * @summary Checks whether a value is primitive
     */

    module.exports = function isPrimitive ( $value ) {
        return (
            $value === null
              || (
                typeof $value !== 'object'
                  && typeof $value !== 'function'
              )
          );
      };
  
