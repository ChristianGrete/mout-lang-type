const
  _URL__GRUNT_CONFIG_FILE = './config/grunt.json',
  _URL__NPM_MANIFEST_FILE = './package.json';

var
  _gruntRegisterTasks = require('grunt-register-tasks'),
  _loadGruntTasks = require('load-grunt-tasks'),
  _timeGrunt = require('time-grunt');

module.exports = function ( $grunt ) {

    var

      _$grunt__file = $grunt.file,
      _$grunt__file__readJSON = _$grunt__file.readJSON,

      _plugins = [
          'grunt-contrib-*',
          'grunt-easy-nodefy',
          'grunt-jsonlint'
        ],

      _config = {
          'cfg': _$grunt__file__readJSON( _URL__GRUNT_CONFIG_FILE ),
          'clean': {
              'dist': '<%= cfg.PATH__DIST %>'
            },
          'copy': {
              'src': {
                  'cwd': '<%= cfg.PATH__SRC %>',
                  'dest': '<%= cfg.PATH__DIST__AMD %>',
                  'expand': true,
                  'src': '<%= cfg.GLOB__JS__RECURSIVE %>'
                }
            },
          'jsonlint': {
              'config': '<%= cfg.PATH__CONFIG %>/<%= cfg.GLOB__JSON__RECURSIVE %>',
              'manifests': '<%= cfg.PATH__ROOT %>/<%= cfg.GLOB__MANIFESTS %>'
            },
          'nodefy': {
              'src': {
                  'cwd': '<%= cfg.PATH__SRC %>',
                  'dest': '<%= cfg.PATH__DIST__CJS %>',
                  'expand': true,
                  'src': '<%= cfg.GLOB__JS__RECURSIVE %>'
                }
            },
          'pkg': _$grunt__file__readJSON( _URL__NPM_MANIFEST_FILE )
        },

      _tasks = {
          'build': [
              'default',
              'clean',
              'copy',
              'nodefy'
            ],
          'default': [
              'jsonlint'
            ],
        };

    _timeGrunt( $grunt ),

    $grunt.initConfig( _config ),

    _loadGruntTasks(
      $grunt,
      {
        pattern: _plugins,
        scope: 'devDependencies'
      }
    ),

    _gruntRegisterTasks(
      $grunt,
      _tasks
    );

  };