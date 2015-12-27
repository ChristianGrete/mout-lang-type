/**
 * @author Christian Grete <webmaster@christiangrete.com>
 * @copyright &copy; 2015 Christian Grete
 * @file Provides the [mout-lang-type]{@link module:mout-lang-type} module
 * @license MIT
 * @since 0.0.1
 */

define(
  function ( require ) {

    /**
     * The module/object containing the module’s exports
     * @author Christian Grete <webmaster@christiangrete.com>
     * @license MIT
     * @module mout-lang-type
     * @property {object} lang Contains all <code>lang</code> utilities
     * @property {object} lang.GLOBAL References the global object
     * @property {function} lang.instanceOf Checks whether a value is an instance of a constructor
     * @property {function} lang.isComplex Checks whether a value is complex
     * @property {function} lang.isFunction Checks whether a value is a function
     * @property {function} lang.isObject Checks whether a value is an object
     * @property {function} lang.isPrimitive Checks whether a value is primitive
     * @property {function} lang.isRegExp Checks whether a value is a regular expression
     * @property {function} lang.isType Checks whether a value is of a type
     * @property {function} lang.typeOf Gets the type of a value
     * @property {string} VERSION Indicates the version number of the module
     * @since 0.0.1
     */

    return {
        'lang': require('./lang'),
        'VERSION': '<%= pkg.version %>'
      }
  }
)
