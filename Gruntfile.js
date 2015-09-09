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
          'grunt-bump',
          'grunt-contrib-*',
          'grunt-easy-nodefy',
          'grunt-jsonlint',
          'grunt-string-replace'
        ],

      _config = {
          'bump': {
              'options': {
                  'commit': true,
                  'commitFiles': '<%= cfg.PATH__ROOT %>/<%= cfg.GLOB__MANIFESTS %>',
                  'commitMessage': 'bump(version): %VERSION%',
                  'createTag': false,
                  'files': '<%= cfg.PATH__ROOT %>/<%= cfg.GLOB__MANIFESTS %>',
                  'push': true,
                  'pushTo': 'origin',
                  'updateConfigs': [
                      null,
                      'pkg'
                    ]
                }
            },
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
          'string-replace': {
              'src': {
                  'files': [
                      {
                        'cwd': '<%= cfg.PATH__DIST %>',
                        'dest': '<%= cfg.PATH__DIST %>',
                        'expand': true,
                        'src': '<%= cfg.GLOB__INDEX_JS__RECURSIVE %>'
                      }
                    ],
                  'options': {
                      'replacements': [
                          {
                            'pattern': /<%= pkg\.version %>/g,
                            'replacement': '<%= pkg.version %>'
                          }
                        ]
                    }
                }
            },
          'pkg': _$grunt__file__readJSON( _URL__NPM_MANIFEST_FILE )
        },

      _tasks = {
          'build': [
              'default',
              'clean',
              'copy',
              'nodefy',
              'string-replace'
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