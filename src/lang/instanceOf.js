/**
 * @author Christian Grete <webmaster@christiangrete.com>
 * @copyright &copy; 2015 Christian Grete
 * @file Provides the [instanceOf]{@link module:mout-lang-type.lang.instanceOf} utility
 * @license MIT
 */

define(
  [
    './isPrimitive'
  ],
  function ( isPrimitive ) {

    /**
     * Returns whether the passed value is an instance of the specified constructor
     * @author Christian Grete <webmaster@christiangrete.com>
     * @function module:mout-lang-type.lang.instanceOf
     * @license MIT
     * @param {mixed} $value The <code>object</code> or <code>primitive</code> whose prototype chain is to be checked
     * @param {function} $constructor The <code>function</code> whose prototype property is to be compared against
     * @requires module:mout-lang-type.lang.isPrimitive
     * @returns {boolean} A <code>boolean</code> indicating the result of the prototypes comparison
     * @summary Checks whether a value is an instance of a constructor
     */

    return function instanceOf ( $value, $constructor ) {
        if( $value == null ) {
          return false;
        }

        if( isPrimitive($value) ) {
          $value = Object( $value );
        }

        return (
            (
              /*@cc_on@if(@_jscript_version<5.8)!@end@*/false
                && !$value.hasOwnProperty
            ) ?
              false :
                $value instanceof $constructor
          );
      };
  }
);
