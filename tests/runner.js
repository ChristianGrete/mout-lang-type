var
  jasmine
    = global.jasmine
    = require('jasmine-node'),
  _env = jasmine.getEnv(),
  _reporter = new jasmine.TerminalVerboseReporter({
      color: true,
      onComplete: function onComplete ( $reporter ) {
        if( $reporter.results().failedCount ) {
          process.exit( 1 );
        }
      }
    });

_env.addReporter( _reporter ),

require(
  require('path').join(
    __dirname,
    'specs/dist.spec.js'
  )
),

_env.execute();
