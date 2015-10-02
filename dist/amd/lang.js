/**
 * @author Christian Grete <webmaster@christiangrete.com>
 * @copyright &copy; 2015 Christian Grete
 * @file Provides all [lang]{@link module:mout-lang-type.lang} utilities
 * @license MIT
 */

define(
  function ( require ) {

    /**
     * The namespace/object containing the <code>lang</code> utilities
     * @author Christian Grete <webmaster@christiangrete.com>
     * @license MIT
     * @namespace {object} module:mout-lang-type.lang
     * @property {function} instanceOf Checks whether a value is an instance of a constructor
     * @property {function} isPrimitive Checks whether a value is primitive
     * @property {function} isType Checks whether a value is of a type
     * @property {function} typeOf Gets the type of a value
     */

    return {
        'instanceOf': require('./lang/instanceOf'),
        'isPrimitive': require('./lang/isPrimitive'),
        'isType': require('./lang/isType'),
        'typeOf': require('./lang/typeOf')
      };
  }
);
