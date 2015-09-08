const
  _URL__GRUNT_CONFIG_FILE = './config/grunt.json',
  _URL__NPM_MANIFEST_FILE = './package.json';

module.exports = function ( $grunt ) {

    var

      _$grunt__file = $grunt.file,
      _$grunt__file__readJSON = _$grunt__file.readJSON,

      _config = {
          'cfg': _$grunt__file__readJSON( _URL__GRUNT_CONFIG_FILE ),
          'pkg': _$grunt__file__readJSON( _URL__NPM_MANIFEST_FILE )
        };

    $grunt.initConfig( _config ),

    $grunt.registerTask(
      'default',
      []
    );

  };