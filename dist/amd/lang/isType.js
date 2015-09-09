define(
  [
    './typeOf'
  ],
  function ( typeOf ) {
    return function isType ( $mixed, $type ) {
        return typeOf( $mixed ) === $type;
      };
  }
);
