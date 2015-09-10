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
          'grunt-exec',
          'grunt-jsonlint',
          'grunt-modify-json',
          'grunt-string-replace'
        ],

      _config = {
          'bump': {
              'options': {
                  'commit': true,
                  'commitFiles': [
                      '<%= cfg.PATH__ROOT %>/<%= cfg.GLOB__MANIFESTS %>'
                    ],
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
              'dist': '<%= cfg.PATH__DIST %>',
              'fwd': [
                  '<%= cfg.PATH__LANG %>',
                  '<%= cfg.PATH__ROOT %>/<%= cfg.GLOB__LANG_JS %>'
                ]
            },
          'copy': {
              'fwd': {
                  'cwd': '<%= cfg.PATH__FWD %>',
                  'dest': '<%= cfg.PATH__ROOT %>',
                  'expand': true,
                  'src': '<%= cfg.GLOB__JS__RECURSIVE %>'
                },
              'src': {
                  'cwd': '<%= cfg.PATH__SRC %>',
                  'dest': '<%= cfg.PATH__DIST__AMD %>',
                  'expand': true,
                  'src': '<%= cfg.GLOB__JS__RECURSIVE %>'
                }
            },
          'exec': {
              'commit': 'git commit -m "release(v<%= pkg.version %>): distribute"',
              'tag': 'git tag -a v<%= pkg.version %> -m "<%= grunt.option(\'tagMessage\') %>"'
            },
          'jshint': {
              'options': {
                  'jshintrc': true
                },
              'fwd': '<%= cfg.PATH__FWD %>/<%= cfg.GLOB__JS__RECURSIVE %>',
              'src': '<%= cfg.PATH__SRC %>/<%= cfg.GLOB__JS__RECURSIVE %>'
            },
          'jsonlint': {
              'config': [
                  '<%= cfg.PATH__CONFIG %>/<%= cfg.GLOB__JSON__RECURSIVE %>',
                  '<%= cfg.PATH__ROOT %>/<%= cfg.GLOB__JSHINTRC %>'
                ],
              'manifests': '<%= cfg.PATH__ROOT %>/<%= cfg.GLOB__MANIFESTS %>'
            },
          'modify_json': {
              'manifests': {
                  'files': {
                      '<%= cfg.PATH__ROOT %>': '<%= cfg.PATH__ROOT %>/<%= cfg.GLOB__MANIFESTS %>'
                    },
                  'options': {
                      'add': true,
                      'fields': {
                          'private': false
                        }
                    }
                }
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
              'jsonlint',
              'jshint'
            ]
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