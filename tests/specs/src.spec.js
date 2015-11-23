// jshint -W002, -W053, -W054, -W058, -W064

/* globals
 alert: false,
 describe: false,
 expect: false,
 it: false,
 jasmine: false,
 navigator: false,
 Symbol: false
*/

'use strict';

define(
  [
    'mout-lang-type/lang/instanceOf',
    'mout-lang-type/lang/isComplex',
    'mout-lang-type/lang/isFunction',
    'mout-lang-type/lang/isObject',
    'mout-lang-type/lang/isPrimitive',
    'mout-lang-type/lang/isRegExp',
    'mout-lang-type/lang/isType',
    'mout-lang-type/lang/typeOf'
  ],
  function (
    instanceOf,
    isComplex,
    isFunction,
    isObject,
    isPrimitive,
    isRegExp,
    isType,
    typeOf
  ) {
    var
      _ALERT_IS_DEFINED = typeof alert !== 'undefined',
      _NAVIGATOR_IS_OBJECT = typeof navigator === 'object',
      _SYMBOL_IS_FUNCTION = typeof Symbol === 'function',
      _UNDEFINED,
      _complexSymbol,
      _isFunction = function ( $value ) {
          return (
              typeof $value === 'function'
                && Object.prototype.toString.call( $value ) === '[object Function]'
            );
        },
      _invalidConstructor = function () {
          function noConstruct () {}

          noConstruct.prototype = null;

          return noConstruct;
        }(),
      _objectWithNullAsPrototype = Object.create( null ),
      _primitiveSymbol;

    if( _SYMBOL_IS_FUNCTION ) {
      _primitiveSymbol = Symbol(),
      _complexSymbol = Object( _primitiveSymbol );
    }

    describe(
      'mout-lang-type',
      function () {
        if(
          (
            typeof requirejs !== 'undefined'
              && !_isFunction( requirejs )
          )
            || typeof requirejs.version !== 'string'

          ||

          typeof jasmine !== 'object'
            || jasmine === null
              || typeof jasmine.version !== 'string'
        ) {
          throw Error('Invalid dependencies');
        }

        it(
          'is loaded with RequireJS v'
            + ( requirejs.version || '? (unknown version)' )
        ),

        it(
          'is tested with Jasmine v'
            + ( jasmine.version || '? (unknown version)' )
        );
      }
    ),

    describe(
      'mout-lang-type/lang/instanceOf',
      function () {
        it(
          'is a function',
          function () {
            expect( _isFunction(instanceOf) ).toBe( true );
          }
        ),

        it(
          'has no prototype object',
          function () {
            expect( instanceOf.prototype ).toBe( null );
          }
        ),

        it(
          'can test primitive values',
          function () {
            expect( instanceOf(false, Boolean) ).toBe( true ),
            expect( instanceOf(true, Boolean) ).toBe( true ),
            expect( instanceOf(null, Object) ).toBe( false ),
            expect( instanceOf(0, Number) ).toBe( true ),
            expect( instanceOf('', String) ).toBe( true ),
            expect( instanceOf(_UNDEFINED, Object) ).toBe( false );

            if( _SYMBOL_IS_FUNCTION ) {
              expect( instanceOf(_primitiveSymbol, Symbol) ).toBe( true );
            }
          }
        ),

        it(
          'requires a valid constructor',
          function () {
            var
              _result;

            try {
              instanceOf( {}, _invalidConstructor );
            } catch( $error ) {
              try {
                instanceOf( {}, null );
              } catch ( $error ) {
                try {
                  instanceOf( {}, _UNDEFINED );
                } catch ( $error ) {
                  try {
                    instanceOf( {}, {} );
                  } catch ( $error ) {
                    _result = true;
                  }
                }
              }
            }

            expect( _result ).toBe( true );
          }
        ),

        it(
          'requires two arguments',
          function () {
            var
              _result;

            expect( instanceOf() ).toBe( false );

            try {
              instanceOf( {} );
            } catch ( $error ) {
              _result = true;
            }

            expect( _result ).toBe( true );
          }
        );
      }
    ),

    describe(
      'mout-lang-type/lang/isComplex',
      function () {
        it(
          'is a function',
          function () {
            expect( _isFunction(isComplex) ).toBe( true );
          }
        ),

        it(
          'has no prototype object',
          function () {
            expect( isComplex.prototype ).toBe( null );
          }
        ),

        it(
          'determines complex data types',
          function () {
            expect( isComplex(arguments) ).toBe( true ),
            expect( isComplex([]) ).toBe( true ),
            expect( isComplex(new Array) ).toBe( true ),
            expect( isComplex(false) ).toBe( false ),
            expect( isComplex(true) ).toBe( false ),
            expect( isComplex(new Boolean) ).toBe( true ),
            expect( isComplex(new Date) ).toBe( true ),
            expect( isComplex(new Error) ).toBe( true ),
            expect( isComplex(function () {}) ).toBe( true ),
            expect( isComplex(new Function) ).toBe( true ),
            expect( isComplex(Number.NEGATIVE_INFINITY) ).toBe( false ),
            expect( isComplex(-0) ).toBe( false ),
            expect( isComplex(0) ).toBe( false ),
            expect( isComplex(+0) ).toBe( false ),
            expect( isComplex(Number.POSITIVE_INFINITY) ).toBe( false ),
            expect( isComplex(Number.NaN) ).toBe( false ),
            expect( isComplex(new Number) ).toBe( true ),
            expect( isComplex({}) ).toBe( true ),
            expect( isComplex(new Object) ).toBe( true ),
            expect( isComplex(_objectWithNullAsPrototype) ).toBe( true ),
            expect( isComplex(/./) ).toBe( true ),
            expect( isComplex(new RegExp) ).toBe( true ),
            expect( isComplex('') ).toBe( false ),
            expect( isComplex(new String) ).toBe( true ),
            expect( isComplex(_UNDEFINED) ).toBe( false );

            if( _SYMBOL_IS_FUNCTION ) {
              expect( isComplex(_primitiveSymbol) ).toBe( false ),
              expect( isComplex(_complexSymbol) ).toBe( true );
            }
          }
        );
      }
    ),

    describe(
      'mout-lang-type/lang/isFunction',
      function () {
        it(
          'is a function',
          function () {
            expect( _isFunction(isFunction) ).toBe( true );
          }
        ),

        it(
          'has no prototype object',
          function () {
            expect( isFunction.prototype ).toBe( null );
          }
        ),

        it(
          'determines functions',
          function () {
            if( _ALERT_IS_DEFINED ) {
              expect( isFunction(alert) ).toBe( true );
            }

            expect( isFunction(arguments) ).toBe( false ),
            expect( isFunction([]) ).toBe( false ),
            expect( isFunction(new Array) ).toBe( false ),
            expect( isFunction(false) ).toBe( false ),
            expect( isFunction(true) ).toBe( false ),
            expect( isFunction(new Boolean) ).toBe( false ),
            expect( isFunction(new Date) ).toBe( false ),
            expect( isFunction(new Error) ).toBe( false ),
            expect( isFunction(function () {}) ).toBe( true ),
            expect( isFunction(new Function) ).toBe( true ),
            expect( isFunction(Number.NEGATIVE_INFINITY) ).toBe( false ),
            expect( isFunction(-0) ).toBe( false ),
            expect( isFunction(0) ).toBe( false ),
            expect( isFunction(+0) ).toBe( false ),
            expect( isFunction(Number.POSITIVE_INFINITY) ).toBe( false ),
            expect( isFunction(Number.NaN) ).toBe( false ),
            expect( isFunction(new Number) ).toBe( false ),
            expect( isFunction({}) ).toBe( false ),
            expect( isFunction(new Object) ).toBe( false ),
            expect( isFunction(_objectWithNullAsPrototype) ).toBe( false ),
            expect( isFunction(/./) ).toBe( false ),
            expect( isFunction(new RegExp) ).toBe( false ),
            expect( isFunction('') ).toBe( false ),
            expect( isFunction(new String) ).toBe( false ),
            expect( isFunction(_UNDEFINED) ).toBe( false );

            if( _SYMBOL_IS_FUNCTION ) {
              expect( isFunction(_primitiveSymbol) ).toBe( false ),
              expect( isFunction(_complexSymbol) ).toBe( false );
            }
          }
        );
      }
    ),

    describe(
      'mout-lang-type/lang/isObject',
      function () {
        it(
          'is a function',
          function () {
            expect( _isFunction(isObject) ).toBe( true );
          }
        ),

        it(
          'has no prototype object',
          function () {
            expect( isObject.prototype ).toBe( null );
          }
        ),

        it(
          'determines objects',
          function () {
            if( _ALERT_IS_DEFINED ) {
              expect( isObject(alert) ).toBe( false );
            }

            expect( isObject(arguments) ).toBe( false ),
            expect( isObject([]) ).toBe( false ),
            expect( isObject(new Array) ).toBe( false ),
            expect( isObject(false) ).toBe( false ),
            expect( isObject(true) ).toBe( false ),
            expect( isObject(new Boolean) ).toBe( false ),
            expect( isObject(new Date) ).toBe( false ),
            expect( isObject(new Error) ).toBe( false ),
            expect( isObject(function () {}) ).toBe( false ),
            expect( isObject(new Function) ).toBe( false ),
            expect( isObject(Number.NEGATIVE_INFINITY) ).toBe( false ),
            expect( isObject(-0) ).toBe( false ),
            expect( isObject(0) ).toBe( false ),
            expect( isObject(+0) ).toBe( false ),
            expect( isObject(Number.POSITIVE_INFINITY) ).toBe( false ),
            expect( isObject(Number.NaN) ).toBe( false ),
            expect( isObject(new Number) ).toBe( false ),
            expect( isObject({}) ).toBe( true ),
            expect( isObject(new Object) ).toBe( true ),
            expect( isObject(_objectWithNullAsPrototype) ).toBe( true ),
            expect( isObject(/./) ).toBe( false ),
            expect( isObject(new RegExp) ).toBe( false ),
            expect( isObject('') ).toBe( false ),
            expect( isObject(new String) ).toBe( false ),
            expect( isObject(_UNDEFINED) ).toBe( false );

            if( _SYMBOL_IS_FUNCTION ) {
              expect( isObject(_primitiveSymbol) ).toBe( false ),
              expect( isObject(_complexSymbol) ).toBe( false );
            }
          }
        );
      }
    ),

    describe(
      'mout-lang-type/lang/isPrimitive',
      function () {
        it(
          'is a function',
          function () {
            expect( _isFunction(isPrimitive) ).toBe( true );
          }
        ),

        it(
          'has no prototype object',
          function () {
            expect( isPrimitive.prototype ).toBe( null );
          }
        ),

        it(
          'determines primitive data types',
          function () {
            expect( isPrimitive(arguments) ).toBe( false ),
            expect( isPrimitive([]) ).toBe( false ),
            expect( isPrimitive(new Array) ).toBe( false ),
            expect( isPrimitive(false) ).toBe( true ),
            expect( isPrimitive(true) ).toBe( true ),
            expect( isPrimitive(new Boolean) ).toBe( false ),
            expect( isPrimitive(new Date) ).toBe( false ),
            expect( isPrimitive(new Error) ).toBe( false ),
            expect( isPrimitive(function () {}) ).toBe( false ),
            expect( isPrimitive(new Function) ).toBe( false ),
            expect( isPrimitive(Number.NEGATIVE_INFINITY) ).toBe( true ),
            expect( isPrimitive(-0) ).toBe( true ),
            expect( isPrimitive(0) ).toBe( true ),
            expect( isPrimitive(+0) ).toBe( true ),
            expect( isPrimitive(Number.POSITIVE_INFINITY) ).toBe( true ),
            expect( isPrimitive(Number.NaN) ).toBe( true ),
            expect( isPrimitive(new Number) ).toBe( false ),
            expect( isPrimitive({}) ).toBe( false ),
            expect( isPrimitive(new Object) ).toBe( false ),
            expect( isPrimitive(_objectWithNullAsPrototype) ).toBe( false ),
            expect( isPrimitive(/./) ).toBe( false ),
            expect( isPrimitive(new RegExp) ).toBe( false ),
            expect( isPrimitive('') ).toBe( true ),
            expect( isPrimitive(new String) ).toBe( false ),
            expect( isPrimitive(_UNDEFINED) ).toBe( true );

            if( _SYMBOL_IS_FUNCTION ) {
              expect( isPrimitive(_primitiveSymbol) ).toBe( true ),
              expect( isPrimitive(_complexSymbol) ).toBe( false );
            }
          }
        );
      }
    ),

    describe(
      'mout-lang-type/lang/isRegExp',
      function () {
        it(
          'is a function',
          function () {
            expect( _isFunction(isRegExp) ).toBe( true );
          }
        ),

        it(
          'has no prototype object',
          function () {
            expect( isRegExp.prototype ).toBe( null );
          }
        ),

        it(
          'determines regular expressions',
          function () {
            expect( isRegExp(arguments) ).toBe( false ),
            expect( isRegExp([]) ).toBe( false ),
            expect( isRegExp(new Array) ).toBe( false ),
            expect( isRegExp(false) ).toBe( false ),
            expect( isRegExp(true) ).toBe( false ),
            expect( isRegExp(new Boolean) ).toBe( false ),
            expect( isRegExp(new Date) ).toBe( false ),
            expect( isRegExp(new Error) ).toBe( false ),
            expect( isRegExp(function () {}) ).toBe( false ),
            expect( isRegExp(new Function) ).toBe( false ),
            expect( isRegExp(Number.NEGATIVE_INFINITY) ).toBe( false ),
            expect( isRegExp(-0) ).toBe( false ),
            expect( isRegExp(0) ).toBe( false ),
            expect( isRegExp(+0) ).toBe( false ),
            expect( isRegExp(Number.POSITIVE_INFINITY) ).toBe( false ),
            expect( isRegExp(Number.NaN) ).toBe( false ),
            expect( isRegExp(new Number) ).toBe( false ),
            expect( isRegExp({}) ).toBe( false ),
            expect( isRegExp(new Object) ).toBe( false ),
            expect( isRegExp(_objectWithNullAsPrototype) ).toBe( false ),
            expect( isRegExp(/./) ).toBe( true ),
            expect( isRegExp(new RegExp) ).toBe( true ),
            expect( isRegExp('') ).toBe( false ),
            expect( isRegExp(new String) ).toBe( false ),
            expect( isRegExp(_UNDEFINED) ).toBe( false );

            if( _SYMBOL_IS_FUNCTION ) {
              expect( isRegExp(_primitiveSymbol) ).toBe( false ),
              expect( isRegExp(_complexSymbol) ).toBe( false );
            }
          }
        );
      }
    ),

    describe(
      'mout-lang-type/lang/isType',
      function () {
        it(
          'is a function',
          function () {
            expect( _isFunction(isType) ).toBe( true );
          }
        ),

        it(
          'has no prototype object',
          function () {
            expect( isType.prototype ).toBe( null );
          }
        ),

        it(
          'determines built-in types',
          function () {
            if( _ALERT_IS_DEFINED ) {
              expect( isType(alert, 'function') ).toBe( true );
            }

            expect( isType(arguments, 'arguments') ).toBe( true ),
            expect( isType([], 'array') ).toBe( true ),
            expect( isType(new Array, 'array') ).toBe( true ),
            expect( isType(false, 'boolean') ).toBe( true ),
            expect( isType(true, 'boolean') ).toBe( true ),
            expect( isType(new Boolean, 'boolean') ).toBe( true ),
            expect( isType(new Date, 'date') ).toBe( true ),
            expect( isType(new Error, 'error') ).toBe( true ),
            expect( isType(function () {}, 'function') ).toBe( true ),
            expect( isType(new Function, 'function') ).toBe( true ),
            expect( isType(Number.NEGATIVE_INFINITY, 'number') ).toBe( true ),
            expect( isType(-0, 'number') ).toBe( true ),
            expect( isType(0, 'number') ).toBe( true ),
            expect( isType(+0, 'number') ).toBe( true ),
            expect( isType(Number.POSITIVE_INFINITY, 'number') ).toBe( true ),
            expect( isType(Number.NaN, 'number') ).toBe( true ),
            expect( isType(new Number, 'number') ).toBe( true ),
            expect( isType({}, 'object') ).toBe( true ),
            expect( isType(new Object, 'object') ).toBe( true ),
            expect( isType(_objectWithNullAsPrototype, 'object') ).toBe( true ),
            expect( isType(/./, 'regExp') ).toBe( true ),
            expect( isType(new RegExp, 'regExp') ).toBe( true ),
            expect( isType('', 'string') ).toBe( true ),
            expect( isType(new String, 'string') ).toBe( true ),
            expect( isType(_UNDEFINED, 'undefined') ).toBe( true );

            if( _NAVIGATOR_IS_OBJECT ) {
              expect( isType(navigator, 'navigator') ).toBe( false );
            }

            if( _SYMBOL_IS_FUNCTION ) {
              expect( isType(_primitiveSymbol, 'symbol') ).toBe( true ),
              expect( isType(_complexSymbol, 'symbol') ).toBe( true );
            }
          }
        );
      }
    ),

    describe(
      'mout-lang-type/lang/typeOf',
      function () {
        it(
          'is a function',
          function () {
            expect( _isFunction(typeOf) ).toBe( true );
          }
        ),

        it(
          'has no prototype object',
          function () {
            expect( typeOf.prototype ).toBe( null );
          }
        ),

        it(
          'determines built-in types',
          function () {
            if( _ALERT_IS_DEFINED ) {
              expect( typeOf(alert) ).toBe('function');
            }

            expect( typeOf(arguments) ).toBe('arguments'),
            expect( typeOf([]) ).toBe('array'),
            expect( typeOf(new Array) ).toBe('array'),
            expect( typeOf(false) ).toBe('boolean'),
            expect( typeOf(true) ).toBe('boolean'),
            expect( typeOf(new Boolean) ).toBe('boolean'),
            expect( typeOf(new Date) ).toBe('date'),
            expect( typeOf(new Error) ).toBe('error'),
            expect( typeOf(new TypeError) ).toBe('error'), // TODO
            expect( typeOf(function () {}) ).toBe('function'),
            expect( typeOf(new Function) ).toBe('function'),
            expect( typeOf(Number.NEGATIVE_INFINITY) ).toBe('number'),
            expect( typeOf(-0) ).toBe('number'),
            expect( typeOf(0) ).toBe('number'),
            expect( typeOf(+0) ).toBe('number'),
            expect( typeOf(Number.POSITIVE_INFINITY) ).toBe('number'),
            expect( typeOf(Number.NaN) ).toBe('number'),
            expect( typeOf(new Number) ).toBe('number'),
            expect( typeOf({}) ).toBe('object'),
            expect( typeOf(new Object) ).toBe('object'),
            expect( typeOf(_objectWithNullAsPrototype) ).toBe('object'),
            expect( typeOf(/./) ).toBe('regExp'),
            expect( typeOf(new RegExp) ).toBe('regExp'),
            expect( typeOf('') ).toBe('string'),
            expect( typeOf(new String) ).toBe('string'),
            expect( typeOf(_UNDEFINED) ).toBe('undefined');

            if( _NAVIGATOR_IS_OBJECT ) {
              expect( typeOf(navigator) ).toBe('object');
            }

            if( _SYMBOL_IS_FUNCTION ) {
              expect( typeOf(_primitiveSymbol) ).toBe('symbol'),
              expect( typeOf(_complexSymbol) ).toBe('symbol');
            }
          }
        ),

        // TODO: Custom obj?

        it(
          'determines `object`',
          function () {
            var
              _objectCustom = function () {
                  var
                    Custom = function Custom () {},
                    toString = function toString () {
                        return '[object Custom]';
                      };

                  if( typeof Object.create === 'function') {
                    Custom.prototype = Object.create(
                        null,
                        {
                          'constructor': {
                              'value': Custom
                            },
                          'toString': {
                              'value': toString
                            }
                        }
                      );
                  } else {
                    Custom.prototype = {
                        'constructor': Custom,
                        'toString': toString
                      };
                  }

                  return new Custom;
                }();

            expect( typeOf(_objectCustom) ).toBe('object');
          }
        );
      }
    );
  }
);