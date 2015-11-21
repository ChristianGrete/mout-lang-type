/**
 * @author Christian Grete <webmaster@christiangrete.com>
 * @copyright &copy; 2015 Christian Grete
 * @file Provides the [instanceOf]{@link module:mout-lang-type.lang.instanceOf} utility
 * @license MIT
 */

// Annotations:
//   1. `instanceof` on host objects causes memory leaks in MSIE < 9

define(
  function () {
    var
      _objectHasNoCreateMethod = typeof Object.create !== 'function';

    /**
     * Returns whether the passed value is an instance of the specified constructor
     * @author Christian Grete <webmaster@christiangrete.com>
     * @function module:mout-lang-type.lang.instanceOf
     * @license MIT
     * @param {mixed} $value The <code>object</code> or <code>primitive</code> whose prototype chain is to be checked
     * @param {function} $constructor The <code>function</code> whose prototype property is to be compared against
     * @returns {boolean} A <code>boolean</code> indicating the result of the prototypes comparison
     * @see [MooTools Core]{@link https://github.com/mootools/mootools-core/commit/4613cae}
     * @summary Checks whether a value is an instance of a constructor
     */

    function instanceOf ( $value, $constructor ) {
      if( $value == null )
        return false;

      if(
        typeof $value !== 'object'
          && typeof $value !== 'function'
      )
        $value = Object( $value );

      return (
          _objectHasNoCreateMethod
            && !$value.valueOf // 1
          ?
            false :
              $value instanceof $constructor
        )
    }

    instanceOf.prototype = null;

    return instanceOf
  }
)
