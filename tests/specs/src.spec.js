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
            expect( instanceOf('', String) ).toBe( true );

            if( _SYMBOL_IS_FUNCTION ) {
              expect( instanceOf(_primitiveSymbol, Symbol) ).toBe( true );
            }

            expect( instanceOf(_UNDEFINED, Object) ).toBe( false );
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
            expect( isComplex(new String) ).toBe( true );

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
            expect( isFunction(new String) ).toBe( false );

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
            expect( isObject(new String) ).toBe( false );

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
            expect( isPrimitive(new String) ).toBe( false );

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
            expect( isRegExp(new String) ).toBe( false );

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
            expect( isType(new String, 'string') ).toBe( true );

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
          'determines built-in types' // TODO
        ),

        it(
          'determines `arguments`',
          function () {
            expect( typeof arguments !== typeOf(arguments) ).toBe( true ),
            expect( typeOf(arguments) ).toBe('arguments');
          }
        ),

        it(
          'determines `array`',
          function () {
            var
              _arrayLength = Array( 1 ),
              _arrayLiteral = [],
              _arrayObject = new Array( 0, 1, 2 );

            expect( typeof _arrayLength !== typeOf(_arrayLength) ).toBe( true ),
            expect( typeOf(_arrayLength) ).toBe('array'),
            expect( typeof _arrayLiteral !== typeOf(_arrayLiteral) ).toBe( true ),
            expect( typeOf(_arrayLiteral) ).toBe('array'),
            expect( typeof _arrayObject !== typeOf(_arrayObject) ).toBe( true ),
            expect( typeOf(_arrayObject) ).toBe('array');
          }
        ),

        it(
          'determines `boolean`',
          function () {
            var
              _booleanObjectFalse = new Boolean,
              _booleanObjectTrue = new Boolean( true ),
              _booleanPrimitiveFalse = Boolean(),
              _booleanPrimitiveTrue = true,
              _booleanConversionPrimitiveFalse = Object( _booleanPrimitiveFalse ),
              _booleanConversionPrimitiveTrue = Object( _booleanPrimitiveTrue );

            expect( typeof _booleanObjectFalse !== typeOf(_booleanObjectFalse) ).toBe( true ),
            expect( typeOf(_booleanObjectFalse) ).toBe('boolean'),
            expect( typeof _booleanObjectTrue !== typeOf(_booleanObjectTrue) ).toBe( true ),
            expect( typeOf(_booleanObjectTrue) ).toBe('boolean'),
            expect( typeof _booleanPrimitiveFalse === typeOf(_booleanPrimitiveFalse) ).toBe( true ),
            expect( typeOf(_booleanPrimitiveFalse) ).toBe('boolean'),
            expect( typeof _booleanPrimitiveTrue === typeOf(_booleanPrimitiveTrue) ).toBe( true ),
            expect( typeOf(_booleanPrimitiveTrue) ).toBe('boolean'),
            expect( typeof _booleanConversionPrimitiveFalse !== typeOf(_booleanConversionPrimitiveFalse) ).toBe( true ),
            expect( typeOf(_booleanConversionPrimitiveFalse) ).toBe('boolean'),
            expect( typeof _booleanConversionPrimitiveTrue !== typeOf(_booleanConversionPrimitiveTrue) ).toBe( true ),
            expect( typeOf(_booleanConversionPrimitiveTrue) ).toBe('boolean');
          }
        ),

        it(
          'determines `date`',
          function () {
            var
              _dateString = Date(),
              _dateObject = new Date,
              _dateValue = _dateObject.valueOf(),
              _dateConversionString = Object( _dateString ),
              _dateConversionObject = Object(_dateObject ),
              _dateConversionValue = Object( _dateValue );

            expect( typeof _dateString === typeOf(_dateString) ).toBe( true ),
            expect( typeOf(_dateString) ).toBe('string'),
            expect( typeof _dateObject !== typeOf(_dateObject) ).toBe( true ),
            expect( typeOf(_dateObject) ).toBe('date'),
            expect( typeof _dateValue === typeOf(_dateValue) ).toBe( true ),
            expect( typeOf(_dateValue) ).toBe('number'),
            expect( typeof _dateConversionString !== typeOf(_dateConversionString) ).toBe( true ),
            expect( typeOf(_dateConversionString) ).toBe('string'),
            expect( typeof _dateConversionObject !== typeOf(_dateConversionObject) ).toBe( true ),
            expect( typeOf(_dateConversionObject) ).toBe('date'),
            expect( typeof _dateConversionValue !== typeOf(_dateConversionValue) ).toBe( true ),
            expect( typeOf(_dateConversionValue) ).toBe('number');
          }
        ),

        it(
          'determines `error`',
          function () {
            var
              _genericError = new Error,
              _specificError = new TypeError;

            expect( typeof _genericError !== typeOf(_genericError) ).toBe( true ),
            expect( typeOf(_genericError) ).toBe('error'),
            expect( typeof _specificError !== typeOf(_specificError) ).toBe( true ),
            expect( typeOf(_specificError) ).toBe('error');
          }
        ),

        it(
          'determines `function`',
          function () {
            var
              _functionLiteral = function () {},
              _functionObject = new Function;

            expect( typeof _functionLiteral === typeOf(_functionLiteral) ).toBe( true ),
            expect( typeOf(_functionLiteral) ).toBe('function'),
            expect( typeof _functionObject === typeOf(_functionObject) ).toBe( true ),
            expect( typeOf(_functionObject) ).toBe('function');
          }
        ),

        it(
          'determines `null`',
          function () {
            expect( typeof null !== typeOf(null) ).toBe( true ),
            expect( typeOf(null) ).toBe('null');
          }
        ),

        it(
          'determines `number`',
          function () {
            var
              _noNumber = Number.NaN,
              _numberNegativeInfinity = Number.NEGATIVE_INFINITY,
              _numberObject = new Number('1'),
              _numberPositiveInfinity = Number.POSITIVE_INFINITY,
              _numberPrimitive = 1,
              _numberConversionNoNumber = Object( _noNumber ),
              _numberConversionNegativeInfinity = Object( _numberNegativeInfinity ),
              _numberConversionPositiveInfinity = Object( _numberPositiveInfinity ),
              _numberConversionPrimitive = Object( _numberPrimitive );

            expect( typeof _noNumber === typeOf(_noNumber) ).toBe( true ),
            expect( typeOf(_noNumber) ).toBe('number'),
            expect( typeof _numberNegativeInfinity === typeOf(_numberNegativeInfinity) ).toBe( true ),
            expect( typeOf(_numberNegativeInfinity) ).toBe('number'),
            expect( typeof _numberObject !== typeOf(_numberObject) ).toBe( true ),
            expect( typeOf(_numberObject) ).toBe('number'),
            expect( typeof _numberPositiveInfinity === typeOf(_numberPositiveInfinity) ).toBe( true ),
            expect( typeOf(_numberPositiveInfinity) ).toBe('number'),
            expect( typeof _numberPrimitive === typeOf(_numberPrimitive) ).toBe( true ),
            expect( typeOf(_numberPrimitive) ).toBe('number'),
            expect( typeof _numberConversionNoNumber !== typeOf(_numberConversionNoNumber) ).toBe( true ),
            expect( typeOf(_numberConversionNoNumber) ).toBe('number'),
            expect( typeof _numberConversionNegativeInfinity !== typeOf(_numberConversionNegativeInfinity) ).toBe( true ),
            expect( typeOf(_numberConversionNegativeInfinity) ).toBe('number'),
            expect( typeof _numberConversionPositiveInfinity !== typeOf(_numberConversionPositiveInfinity) ).toBe( true ),
            expect( typeOf(_numberConversionPositiveInfinity) ).toBe('number'),
            expect( typeof _numberConversionPrimitive !== typeOf(_numberConversionPrimitive) ).toBe( true ),
            expect( typeOf(_numberConversionPrimitive) ).toBe('number');
          }
        ),

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
                }(),
              _objectExotic,
              _objectLiteral = {},
              _objectInstance = new Object;

            expect( typeof _objectCustom === typeOf(_objectCustom) ).toBe( true ),
            expect( typeOf(_objectCustom) ).toBe('object');

            if( typeof navigator === 'object') {
              _objectExotic = navigator,

              expect( typeof _objectExotic === typeOf(_objectExotic) ).toBe( true ),
              expect( typeOf(_objectExotic) ).toBe('object');
            }

            expect( typeof _objectLiteral === typeOf(_objectLiteral) ).toBe( true ),
            expect( typeOf(_objectLiteral) ).toBe('object'),
            expect( typeof _objectInstance === typeOf(_objectInstance) ).toBe( true ),
            expect( typeOf(_objectInstance) ).toBe('object');
          }
        ),

        it(
          'determines `regExp`',
          function () {
            var
              _regExpLiteral = /^[a-z]{1,2}$/gi,
              _regExpObject = RegExp('^[-_]?' + '[a-z]*$');

            expect( typeof _regExpLiteral !== typeOf(_regExpLiteral) ).toBe( true ),
            expect( typeOf(_regExpLiteral) ).toBe('regExp'),
            expect( typeof _regExpObject !== typeOf(_regExpObject) ).toBe( true ),
            expect( typeOf(_regExpObject) ).toBe('regExp');
          }
        ),

        it(
          'determines `string`',
          function () {
            var
              _stringObject = new String,
              _stringPrimitive = '',
              _stringConversionPrimitive = Object( _stringPrimitive );

            expect( typeof _stringObject !== typeOf(_stringObject) ).toBe( true ),
            expect( typeOf(_stringObject) ).toBe('string'),
            expect( typeof _stringPrimitive === typeOf(_stringPrimitive) ).toBe( true ),
            expect( typeOf(_stringPrimitive) ).toBe('string'),
            expect( typeof _stringConversionPrimitive !== typeOf(_stringConversionPrimitive) ).toBe( true ),
            expect( typeOf(_stringConversionPrimitive) ).toBe('string');
          }
        );

        if( typeof Symbol === 'function') {
          it(
            'determines `symbol`',
            function () {
              var
                _symbolObject = Object( Symbol() ),
                _symbolPrimitive = Symbol();

              expect( typeof _symbolObject !== typeOf(_symbolObject) ).toBe( true ),
              expect( typeOf(_symbolObject) ).toBe('symbol'),
              expect( typeof _symbolPrimitive === typeOf(_symbolPrimitive) ).toBe( true ),
              expect( typeOf(_symbolPrimitive) ).toBe('symbol');
            }
          );
        }

        it(
          'determines `undefined`',
          function () {
            var
              _UNDEF;

            expect( typeof _UNDEF === typeOf(_UNDEF) ).toBe( true ),
            expect( typeOf(_UNDEF) ).toBe('undefined'),
            expect( typeof _undef === typeOf() ).toBe( true ),
            expect( typeOf() ).toBe('undefined');
          }
        );
      }
    );
  }
);