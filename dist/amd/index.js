/**
 * @author Christian Grete <webmaster@christiangrete.com>
 * @copyright Christian Grete 2015
 * @file Provides the [mout-lang-type]{@link module:mout-lang-type} module
 * @license MIT
 */

define(
  function ( require ) {

    /**
     * The module/object containing the module’s exports
     * @author Christian Grete <webmaster@christiangrete.com>
     * @license MIT
     * @module mout-lang-type
     * @property {object} lang Contains all <code>lang</code> utilities
     * @property {function} lang.isType Checks whether a value is of a type
     * @property {function} lang.typeOf Gets the type of a value
     * @property {string} VERSION Indicates the version number of the module
     */

    return {
        lang: require('./lang'),
        VERSION: '0.4.1'
      };
  }
);
