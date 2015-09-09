define(
  function ( require ) {
    return {
        lang: require('./lang'),
        VERSION: '<%= pkg.version %>'
      };
  }
);
