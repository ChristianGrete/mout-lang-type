// jshint -W104

var
  fs = require('fs'),
  path = require('path');

const
  _PATH__DIST = path.join(
      __dirname,
      '../../dist/'
    );

describe(
  'Distributable artifact',
  function () {
    it(
      'is generated into the `dist` directory',
      function () {
        var
          _isDirectory,
          _stat;

        try {
          _stat = fs.lstatSync( _PATH__DIST ),
          _isDirectory = _stat.isDirectory();
        } catch ( $error ) {
          _isDirectory = false;
        }

        expect( _isDirectory ).toBe( true );
      }
    );
  }
);
