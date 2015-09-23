const
  _URL__GRUNT_CONFIG_FILE = './config/grunt.json',
  _URL__NPM_MANIFEST_FILE = './package.json';

var
  gruntRegisterTasks = require('grunt-register-tasks'),
  loadGruntTasks = require('load-grunt-tasks'),
  timeGrunt = require('time-grunt');

module.exports = function ( $grunt ) {

    var

      _$grunt__file = $grunt.file,
      _$grunt__file__readJSON = _$grunt__file.readJSON,

      _plugins = [
          'grunt-alias-npm-submodules',
          'grunt-browser-sync',
          'grunt-bump',
          'grunt-contrib-*',
          'grunt-easy-nodefy',
          'grunt-exec',
          'grunt-jsdoc',
          'grunt-jsonlint',
          'grunt-modify-json',
          'grunt-string-replace'
        ],

      _config = {
          'alias': {
              'cjs': [
                  '<%= cfg.PATH__DIST__CJS %>/<%= cfg.GLOB__LANG_JS %>',
                  '<%= cfg.PATH__DIST__CJS + cfg.PATH__LANG.substr(1) %>/<%= cfg.GLOB__JS__RECURSIVE %>'
                ],
              'options': {
                'levels': 2
                }
            },
          'browserSync': {
              'bsFiles': {
                  'src': '<%= cfg.PATH__DOCS %>/<%= cfg.GLOB__ANY_FILE__RECURSIVE %>'
                },
              'options': {
                  'port': 8080,
                  'server': '<%= cfg.PATH__DOCS %>',
                  'watchTask': true
                }
            },
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
              'docs': '<%= cfg.PATH__DOCS %>',
              'fwd': [
                  '<%= cfg.PATH__LANG %>',
                  '<%= cfg.PATH__ROOT %>/<%= cfg.GLOB__LANG_JS %>'
                ],
              'tests': '<%= cfg.PATH__TESTS %>/<%= cfg.GLOB__RUNNER_TEMP_HTML %>'
            },
          'copy': {
              'src': {
                  'cwd': '<%= cfg.PATH__SRC__JS %>',
                  'dest': '<%= cfg.PATH__DIST__AMD %>',
                  'expand': true,
                  'src': '<%= cfg.GLOB__JS__RECURSIVE %>'
                }
            },
          'exec': {
              'commit': 'git commit -m "release(v<%= pkg.version %>): distribute"',
              'tag': 'git tag -a v<%= pkg.version %> -m "<%= grunt.option(\'tagMessage\') %>"'
            },
          'jasmine': {
              'src': {
                  'options': {
                      'helpers': '<%= cfg.PATH__TESTS__HELPERS %>/<%= cfg.GLOB__JS__RECURSIVE %>',
                      'outfile': '<%= cfg.PATH__TESTS %>/<%= cfg.GLOB__RUNNER_TEMP_HTML %>',
                      'specs': '<%= cfg.PATH__TESTS__SPECS %>/<%= cfg.GLOB__JS__RECURSIVE %>',
                      'template': require('grunt-template-jasmine-requirejs')
                    }
                }
            },
          'jsdoc': {
              'src': {
                  'dest': '<%= cfg.PATH__DOCS %>',
                  'src': '<%= cfg.PATH__SRC__JS %>/<%= cfg.GLOB__JS__RECURSIVE %>'
                }
            },
          'jshint': {
              'options': {
                  'jshintrc': true
                },
              'src': '<%= cfg.PATH__SRC__JS %>/<%= cfg.GLOB__JS__RECURSIVE %>',
              'tests': '<%= cfg.PATH__TESTS %>/<%= cfg.GLOB__JS__RECURSIVE %>'
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
                  'cwd': '<%= cfg.PATH__DIST__AMD %>',
                  'dest': '<%= cfg.PATH__DIST__CJS %>',
                  'expand': true,
                  'src': '<%= cfg.GLOB__JS__RECURSIVE %>'
                }
            },
          'pkg': _$grunt__file__readJSON( _URL__NPM_MANIFEST_FILE ),
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
          'watch': {
              'docs': {
                  'files': '<%= cfg.PATH__DOCS %>/<%= cfg.GLOB__ANY_FILE__RECURSIVE %>'
                },
              'src': {
                  'files': '<%= cfg.PATH__SRC__JS %>/<%= cfg.GLOB__JS__RECURSIVE %>',
                  'tasks': [
                      'jsdoc'
                    ]
                }
            }
        },

      _tasks = {
          'build': [
              'clean',
              'copy',
              'nodefy',
              'string-replace',
              'alias'
            ],
          'default': [
              'jsonlint',
              'jshint'
            ],
          'serve': [
              'jsdoc',
              'browserSync',
              'watch'
            ],
          'test': [
              'default',
              'jasmine'
            ]
        };

    timeGrunt( $grunt ),

    $grunt.initConfig( _config ),

    loadGruntTasks(
      $grunt,
      {
        pattern: _plugins,
        scope: 'devDependencies'
      }
    ),

    gruntRegisterTasks(
      $grunt,
      _tasks
    );

  };