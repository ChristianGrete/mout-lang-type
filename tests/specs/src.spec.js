// jshint -W053, -W054, -W058, -W064

/* globals
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
    'mout-lang-type/lang/isPrimitive',
    'mout-lang-type/lang/isType',
    'mout-lang-type/lang/typeOf'
  ],
  function ( instanceOf, isPrimitive, isType, typeOf ) {
    describe(
      'mout-lang-type',
      function () {
        it(
          'is ready to be tested',
          function () {
            expect( typeof requirejs ).toBe('function'),
            expect( typeof requirejs.version ).toBe('string'),
            expect( typeof jasmine ).toBe('object'),
            expect( jasmine !== null ).toBe( true ),
            expect( typeof jasmine.version ).toBe('string');
          }
        ),

        it(
          'is loaded with RequireJS v'
            + requirejs.version
        ),

        it(
          'is tested with Jasmine v'
           + jasmine.version
        );
      }
    ),

    describe(
      'mout-lang-type/lang/instanceOf',
      function () {
        it(
          'is a function',
          function () {
            expect( typeof instanceOf ).toBe('function');
          }
        ),

        it(
          'works with primitives',
          function () {
            expect( instanceOf(false, Boolean) ).toBe( true ),
            expect( instanceOf(true, Boolean) ).toBe( true ),
            expect( instanceOf(0, Number) ).toBe( true ),
            expect( instanceOf('', String) ).toBe( true );

            if( typeof Symbol === 'function') {
              expect( instanceOf(Symbol(), Symbol) ).toBe( true );
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
            expect( typeof isPrimitive ).toBe('function');
          }
        ),

        it(
          'determines primitive booleans',
          function () {
            expect( isPrimitive(false) ).toBe( true ),
            expect( isPrimitive(true) ).toBe( true ),
            expect( isPrimitive(new Boolean) ).toBe( false );
          }
        ),

        it(
          'determines null',
          function () {
            expect( isPrimitive(null) ).toBe( true );
          }
        ),

        it(
          'determines primitive numbers',
          function () {
            expect( isPrimitive(-1) ).toBe( true ),
            expect( isPrimitive(0) ).toBe( true ),
            expect( isPrimitive(1) ).toBe( true ),
            expect( isPrimitive(2.5) ).toBe( true ),
            expect( isPrimitive(Number.NaN) ).toBe( true ),
            expect( isPrimitive(Number.NEGATIVE_INFINITY) ).toBe( true ),
            expect( isPrimitive(Number.POSITIVE_INFINITY) ).toBe( true ),
            expect( isPrimitive(new Number) ).toBe( false );
          }
        ),

        it(
          'determines primitive strings',
          function () {
            expect( isPrimitive('') ).toBe( true ),
            expect( isPrimitive(new String) ).toBe( false );
          }
        );

        if( typeof Symbol === 'function') {
          it(
            'determines symbols',
            function () {
              var
                _symbolObject = Object( Symbol() ),
                _symbolPrimitive = Symbol();

              expect( isPrimitive(_symbolPrimitive) ).toBe( true ),
              expect( isPrimitive(_symbolObject) ).toBe( false );
            }
          );
        }

        it(
          'determines undefined',
          function () {
            var
              _UNDEF;

            expect( isPrimitive() ).toBe( true ),
            expect( isPrimitive(_UNDEF) ).toBe( true );
          }
        ),

        it(
          'determines non-primitives',
          function () {
            expect( isPrimitive(arguments) ).toBe( false ),
            expect( isPrimitive([]) ).toBe( false ),
            expect( isPrimitive(new Date) ).toBe( false ),
            expect( isPrimitive(new Error) ).toBe( false ),
            expect( isPrimitive(function () {}) ).toBe( false ),
            expect( isPrimitive({}) ).toBe( false ),
            expect( isPrimitive(/./) ).toBe( false );
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
            expect( typeof isType ).toBe('function');
          }
        ),

        it(
          'works',
          function () {
            expect( isType(null, 'null') ).toBe( true ),
            expect( isType([], 'array') ).toBe( true );
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
            expect( typeof typeOf ).toBe('function');
          }
        ),

        it(
          'determines arguments',
          function () {
            expect( typeof arguments !== typeOf(arguments) ).toBe( true ),
            expect( typeOf(arguments) ).toBe('arguments');
          }
        ),

        it(
          'determines array',
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
          'determines boolean',
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
          'determines date',
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
          'determines error',
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
          'determines function',
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
          'determines null',
          function () {
            expect( typeof null !== typeOf(null) ).toBe( true ),
            expect( typeOf(null) ).toBe('null');
          }
        ),

        it(
          'determines number',
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
          'determines object',
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
          'determines regExp',
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
          'determines string',
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
            'determines symbol',
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
          'determines undefined',
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