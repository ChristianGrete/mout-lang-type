# mout-lang-type

[![Latest GitHub Tag](https://img.shields.io/github/tag/ChristianGrete/mout-lang-type.svg)](https://github.com/ChristianGrete/mout-lang-type/tags)
[![Latest GitHub Release](https://img.shields.io/github/release/ChristianGrete/mout-lang-type.svg)](https://github.com/ChristianGrete/mout-lang-type/releases/latest)
[![Total Downloads via GitHub](https://img.shields.io/github/downloads/ChristianGrete/mout-lang-type/latest/total.svg)](https://github.com/ChristianGrete/mout-lang-type/releases)
[![Node.js Module Version](https://img.shields.io/npm/v/mout-lang-type.svg)](https://www.npmjs.com/package/mout-lang-type)
[![Downloads via npm per Month](https://img.shields.io/npm/dm/mout-lang-type.svg)](https://www.npmjs.com/package/mout-lang-type)
[![Bower Component Version](https://img.shields.io/bower/v/mout-lang-type.svg)](http://bower.io/search/?q=mout-lang-type)

> An extension to [mout](http://moutjs.com)/[lang](http://moutjs.com/docs/latest/lang.html) utilities for nerds

__mout-lang-type__ is an extension to [MOUT](http://moutjs.com)’s _[lang](http://moutjs.com/docs/latest/lang.html)_ utilities. It provides two modules: A `typeOf` and an `isType` function to be used instead of the included `kindOf` and `isKind` functions. The difference is that __types__ are expressed in _lowerCamelCase_ and represent the built-in objects `[[Class]]` internal slot tags while MOUT’s __kinds__ are expressed in _UpperCamelCase_ representing the overall tags of objects, even of so-called _non-standard exotic_ objects.

## Getting started

### Installation
Install this extension as a dependency to your project using [Bower](http://bower.io):
```sh
$ bower install --save mout-lang-type
```
Alternatively, it is also available using [npm](https://www.npmjs.org):
```sh
$ npm install --save mout-lang-type
```

### Usage
You can load and use this extension as a module using the AMD or CommonJS API:
```js
// Load the overall module:
var
  _moutLangType = require('mout-lang-type');

// Use the overall module:
_moutLangType.lang.typeOf( null ) === 'null'; // true
_moutLangType.lang.isType( null, 'object' ); // false

// Load all lang utilities:
var
  _lang = require('mout-lang-type/lang');

// Use the lang utilities:
_lang.typeOf( new Date ) === 'date'; // true
_lang.isType( new String('foo'), 'string' ); // true

// Load the individual utilities:
var
  _isType = require('mout-lang-type/lang/isType'),
  _typeOf = require('mout-lang-type/lang/typeOf');

// Use the individual utilities:
_typeOf( [1, 2, 3] ) === 'array'; // true;
_isKind( new RegExp, 'regExp') // true;
```
Keep in mind that the module’s name `mout-lang-type` in AMD is actually just the module’s root directory and can differ from the example above depending on your deployed scripts directory structure.

## Policy

This is communist software. It is crafted with heart and soul to the best of the author’s knowledge and belief: Not for profit but to satisfy the concrete needs. Do whatever you want with it (as long as you keep the author’s copyright notice in all copies or substantial portions of it included) for free. Imagine how the world could be if others would produce and distribute their products for the same benefits and ask yourself why they’re actually not.

## License

This software is licensed under [MIT License](LICENSE.md).

Copyright © 2015 [Christian Grete](https://christiangrete.com)
- [GitHub](https://github.com/ChristianGrete)
- [npm](https://www.npmjs.com/~christiangrete)
- [Twitter](https://twitter.com/ChristianGrete)
- [XING](https://www.xing.com/profile/Christian_Grete2)