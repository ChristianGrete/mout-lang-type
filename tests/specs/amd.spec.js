'use strict';

define(
  [
    'mout-lang-type/lang/isType',
    'mout-lang-type/lang/typeOf'
  ],
  function ( isType, typeOf ) {
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
              _arrayObject = new Array( 0, 1, 2 ),
              _arrayConversionLength = Object( _arrayLength ),
              _arrayConversionLiteral = Object( _arrayLiteral ),
              _arrayConversionObject = Object( _arrayObject );

            expect( typeof _arrayLength !== typeOf(_arrayLength) ).toBe( true ),
            expect( typeOf(_arrayLength) ).toBe('array'),
            expect( typeof _arrayLiteral !== typeOf(_arrayLiteral) ).toBe( true ),
            expect( typeOf(_arrayLiteral) ).toBe('array'),
            expect( typeof _arrayObject !== typeOf(_arrayObject) ).toBe( true ),
            expect( typeOf(_arrayObject) ).toBe('array'),
            expect( typeof _arrayConversionLength !== typeOf(_arrayConversionLength) ).toBe( true ),
            expect( typeOf(_arrayConversionLength) ).toBe('array'),
            expect( typeof _arrayConversionLiteral !== typeOf(_arrayConversionLiteral) ).toBe( true ),
            expect( typeOf(_arrayConversionLiteral) ).toBe('array'),
            expect( typeof _arrayConversionObject !== typeOf(_arrayConversionObject) ).toBe( true ),
            expect( typeOf(_arrayConversionObject) ).toBe('array');
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
              _booleanConversionObjectFalse = Object( _booleanObjectFalse ),
              _booleanConversionObjectTrue = Object( _booleanObjectTrue ),
              _booleanConversionPrimitiveFalse = Object( _booleanPrimitiveFalse ),
              _booleanConversionPrimitiveTrue = Object( _booleanPrimitiveTrue );

            expect( typeof _booleanObjectFalse !== typeOf(_booleanObjectFalse) ).toBe( true ),
            expect( typeOf(_booleanObjectFalse) ).toBe('boolean'),
            expect( typeof _booleanObjectTrue !== typeOf(_booleanObjectTrue) ).toBe( true ),
            expect( typeOf(_booleanObjectTrue) ).toBe('boolean'),
            expect( typeof _booleanPrimitiveFalse === typeOf(_booleanPrimitiveFalse) ).toBe( true ),
            expect( typeOf(_booleanPrimitiveFalse) ).toBe('boolean'),
            expect( typeof _booleanPrimitiveTrue === typeOf(_booleanPrimitiveTrue) ).toBe( true ),
            expect( typeOf(_booleanPrimitiveTrue) ).toBe('boolean');
            expect( typeof _booleanConversionObjectFalse !== typeOf(_booleanConversionObjectFalse) ).toBe( true ),
            expect( typeOf(_booleanConversionObjectFalse) ).toBe('boolean');
            expect( typeof _booleanConversionObjectTrue !== typeOf(_booleanConversionObjectTrue) ).toBe( true ),
            expect( typeOf(_booleanConversionObjectTrue) ).toBe('boolean');
            expect( typeof _booleanConversionPrimitiveFalse !== typeOf(_booleanConversionPrimitiveFalse) ).toBe( true ),
            expect( typeOf(_booleanConversionPrimitiveFalse) ).toBe('boolean');
            expect( typeof _booleanConversionPrimitiveTrue !== typeOf(_booleanConversionPrimitiveTrue) ).toBe( true ),
            expect( typeOf(_booleanConversionPrimitiveTrue) ).toBe('boolean');
          }
        ),

        // TODO: date

        // TODO: error

        // TODO: function

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
              _numberConversionObject = Object( _numberObject ),
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
            expect( typeof _numberConversionObject !== typeOf(_numberConversionObject) ).toBe( true ),
            expect( typeOf(_numberConversionObject) ).toBe('number'),
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

                  if( typeof Object.create === 'function' ) {
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
              _objectInstance = new Object,
              _objectConversionCustom = Object( _objectCustom ),
              _objectConversionExotic,
              _objectConversionLiteral = Object( _objectLiteral ),
              _objectConversionInstance = Object( _objectInstance );

            expect( typeof _objectCustom === typeOf(_objectCustom) ).toBe( true ),
            expect( typeOf(_objectCustom) ).toBe('object');

            if( typeof navigator === 'object' ) {
              _objectExotic = navigator,

              expect( typeof _objectExotic === typeOf(_objectExotic) ).toBe( true ),
              expect( typeOf(_objectExotic) ).toBe('object');
            }

            expect( typeof _objectLiteral === typeOf(_objectLiteral) ).toBe( true ),
            expect( typeOf(_objectLiteral) ).toBe('object'),
            expect( typeof _objectInstance === typeOf(_objectInstance) ).toBe( true ),
            expect( typeOf(_objectInstance) ).toBe('object'),
            expect( typeof _objectConversionCustom === typeOf(_objectConversionCustom) ).toBe( true ),
            expect( typeOf(_objectConversionCustom) ).toBe('object');

            if( typeof _objectExotic !== 'undefined' ) {
              _objectConversionExotic = Object( _objectExotic ),

              expect( typeof _objectConversionExotic === typeOf(_objectConversionExotic) ).toBe( true ),
              expect( typeOf(_objectConversionExotic) ).toBe('object');
            }

            expect( typeof _objectConversionLiteral === typeOf(_objectConversionLiteral) ).toBe( true ),
            expect( typeOf(_objectConversionLiteral) ).toBe('object'),
            expect( typeof _objectConversionInstance === typeOf(_objectConversionInstance) ).toBe( true ),
            expect( typeOf(_objectConversionInstance) ).toBe('object');
          }
        ),

        it(
          'determines regExp',
          function () {
            var
              _regExpLiteral = /^[a-z]{1,2}$/ig,
              _regExpObject = RegExp('^[-_]?' + '[a-z]*$'),
              _regExpConversionLiteral = Object( _regExpLiteral ),
              _regExpConversionObject = Object( _regExpObject );

            expect( typeof _regExpLiteral !== typeOf(_regExpLiteral) ).toBe( true ),
            expect( typeOf(_regExpLiteral) ).toBe('regExp'),
            expect( typeof _regExpObject !== typeOf(_regExpObject) ).toBe( true ),
            expect( typeOf(_regExpObject) ).toBe('regExp'),
            expect( typeof _regExpConversionLiteral !== typeOf(_regExpConversionLiteral) ).toBe( true ),
            expect( typeOf(_regExpConversionLiteral) ).toBe('regExp'),
            expect( typeof _regExpConversionObject !== typeOf(_regExpConversionObject) ).toBe( true ),
            expect( typeOf(_regExpConversionObject) ).toBe('regExp');
          }
        ),

        it(
          'determines string',
          function () {
            var
              _stringObjectEmpty = new String,
              _stringObjectValue = new String('foo'),
              _stringPrimitive = '',
              _stringConversionObjectEmpty = Object( _stringObjectEmpty ),
              _stringConversionObjectValue = Object( _stringObjectValue ),
              _stringConversionPrimitive = Object( _stringPrimitive );

            expect( typeof _stringObjectEmpty !== typeOf(_stringObjectEmpty) ).toBe( true ),
            expect( typeOf(_stringObjectEmpty) ).toBe('string'),
            expect( typeof _stringObjectValue !== typeOf(_stringObjectValue) ).toBe( true ),
            expect( typeOf(_stringObjectValue) ).toBe('string'),
            expect( typeof _stringPrimitive === typeOf(_stringPrimitive) ).toBe( true ),
            expect( typeOf(_stringPrimitive) ).toBe('string'),
            expect( typeof _stringConversionObjectEmpty !== typeOf(_stringConversionObjectEmpty) ).toBe( true ),
            expect( typeOf(_stringConversionObjectEmpty) ).toBe('string'),
            expect( typeof _stringConversionObjectValue !== typeOf(_stringConversionObjectValue) ).toBe( true ),
            expect( typeOf(_stringConversionObjectValue) ).toBe('string'),
            expect( typeof _stringConversionPrimitive !== typeOf(_stringConversionPrimitive) ).toBe( true ),
            expect( typeOf(_stringConversionPrimitive) ).toBe('string');
          }
        );

        if( typeof Symbol === 'function' ) {
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