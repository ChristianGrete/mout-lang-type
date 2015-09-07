define(
  [
    'mout/lang/kindOf'
  ],
  function ( kindOf ) {
    var
      _prototype = String.prototype,
      _charAt = _prototype.charAt,
      _slice = _prototype.slice,
      _toLowerCase = _prototype.toLowerCase;

    return function typeOf ( $mixed ) {
        var
          _kind = kindOf( $mixed );

        return (
            _toLowerCase.call(
              _charAt.call(
                _kind,
                0
              )
            )
              + _slice.call(
                  _kind,
                  1
                )
          );
      };
  }
);
