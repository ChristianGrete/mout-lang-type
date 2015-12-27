/**
 * @author Christian Grete <webmaster@christiangrete.com>
 * @copyright &copy; 2015 Christian Grete
 * @file Provides the [GLOBAL]{@link module:mout-lang-type.lang.GLOBAL} constant
 * @license MIT
 * @since <%= NEXT_RELEASE %>
 */

define(
  function () {

    /**
     * A reference to the global scope object
     * @author Christian Grete <webmaster@christiangrete.com>
     * @constant {object} module:mout-lang-type.lang.GLOBAL
     * @default <code>global</code> or <code>window</code>
     * @license MIT
     * @since <%= NEXT_RELEASE %>
     * @summary References the global object
     */

    return (1,eval)('this') // jshint ignore:line
  }
)
