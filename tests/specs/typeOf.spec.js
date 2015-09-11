'use strict';

define(
  [
    'mout-lang-type/lang/typeOf'
  ],
  function ( typeOf ) {
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

        // TODO: null

        // TODO: number

        // TODO: object, including exotics

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