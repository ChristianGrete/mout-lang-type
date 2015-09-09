var typeOf = require('./typeOf');
    module.exports = function isType ( $mixed, $type ) {
        return typeOf( $mixed ) === $type;
      };
  
