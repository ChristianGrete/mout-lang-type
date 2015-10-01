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
     * TODO
     * @author Garrick Cheung <garrick@garrickcheung.com>
     * @author Christian Grete <webmaster@christiangrete.com>
     * @function module:mout-lang-type.lang.isPrimitive
     * @license MIT
     * @param {mixed} $value TODO
     * @returns {boolean} TODO
     * @summary TODO
     */

    return function isPrimitive ( $value ) {
        switch ( typeof $value ) {
          case 'boolean':
          case 'number':
          case 'string':
          case 'symbol':
            return true;
        }

        return $value == null;
      };
  }
);
