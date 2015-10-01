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
     * TODO
     * @author Christian Grete <webmaster@christiangrete.com>
     * @function module:mout-lang-type.lang.instanceOf
     * @license MIT
     * @param {mixed} $value TODO
     * @param {function} $constructor TODO
     * @requires module:mout-lang-type.lang.isPrimitive
     * @returns {boolean} TODO
     * @summary TODO
     */

    return function instanceOf ( $value, $constructor ) {

        // TODO ----
        // If Type(C) is not Object, throw a TypeError exception.
        // Let instOfHandler be GetMethod(C,@@hasInstance).
        // ReturnIfAbrupt(instOfHandler).
        // If instOfHandler is not undefined, then
        // Return ToBoolean(Call(instOfHandler, C, «O»)).
        // If IsCallable(C) is false, throw a TypeError exception.
        // Return OrdinaryHasInstance(C, O).
        // NOTE Steps 5 and 6 provide compatibility with previous
        // editions of ECMAScript that did not use a @@hasInstance
        // method to define the instanceof operator semantics.
        // If a function object does not define or inherit
        // @@hasInstance it uses the default instanceof semantics.

        return $value instanceof $constructor;
      };
  }
);
