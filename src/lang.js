/**
 * @author Christian Grete <webmaster@christiangrete.com>
 * @copyright Christian Grete 2015
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
     * @property {function} isType Checks whether a value is of a type
     * @property {function} typeOf Gets the type of a value
     */

    return {
        isType: require('./lang/isType'),
        typeOf: require('./lang/typeOf')
      };
  }
);
