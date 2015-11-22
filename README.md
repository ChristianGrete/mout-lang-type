# mout-lang-type

[![Travis CI](https://img.shields.io/travis/ChristianGrete/mout-lang-type.svg)](https://travis-ci.org/ChristianGrete/mout-lang-type)
[![Latest GitHub Tag](https://img.shields.io/github/tag/ChristianGrete/mout-lang-type.svg)](https://github.com/ChristianGrete/mout-lang-type/tags)
[![Latest GitHub Release](https://img.shields.io/github/release/ChristianGrete/mout-lang-type.svg)](https://github.com/ChristianGrete/mout-lang-type/releases/latest)
[![Total Downloads via GitHub](https://img.shields.io/github/downloads/ChristianGrete/mout-lang-type/latest/total.svg)](https://github.com/ChristianGrete/mout-lang-type/releases)
[![Node.js Module Version](https://img.shields.io/npm/v/mout-lang-type.svg)](https://www.npmjs.com/package/mout-lang-type)
[![Downloads via npm per Month](https://img.shields.io/npm/dm/mout-lang-type.svg)](https://www.npmjs.com/package/mout-lang-type)
[![Bower Component Version](https://img.shields.io/bower/v/mout-lang-type.svg)](http://bower.io/search/?q=mout-lang-type)

> An extension to the [mout](http://moutjs.com)/[lang](http://moutjs.com/docs/latest/lang.html) utilities for more reliable type testing

__mout-lang-type__ is an extension to [MOUT](http://moutjs.com)’s _[lang](http://moutjs.com/docs/latest/lang.html)_ utilities. It provides two major modules: A `typeOf` and an `isType` function to be used for more reliable type checks where the included `kindOf` and `isKind` functions would fail. The difference is that those functions always use the __string description tags__ of objects (historically known as the `[[Class]]` internal slot tags) expressed in _UpperCamelCase_, whereas these additional functions use only the limited set of __built-in object tags__ expressed in _lowerCamelCase_ and yield precedence to the results of the native `typeof` operator whenever possible:
```js
kindOf( navigator ); // 'Navigator'
typeOf( navigator ); // 'object'

typeof []; // 'object'
typeOf( [] ); // 'array'
```
This extension also provides two additional modules: An `instanceOf` function that improves the native `instanceof` operator by supporting comparisons with primitive values and fixing a memory leak in legacy Internet Explorer versions; and an `isComplex` function that tests whether values are of complex (non-primitive) data types or not:
```js
1 instanceof Number; // false
instanceOf( 1, Number ); // true

// No memory leaks in IE < 9 on COM objects:
instanceOf( window, Object ); // false

isComplex( 1 ); // false
isComplex( new Number ); // true
```
Lastly, this extension provides a bunch of replacement modules: An `isPrimitive` function that adds support for ES2015 symbols and finally the `isFunction`, `isObject` and `isRegExp` functions that internally use `isType` instead of `isKind` for their specific type checks:
```js
isFunction( alert ); // true, even in IE7
isObject( window ); // true, same here
isPrimitive( Symbol() ); // true
isRegExp( /^regExp$/i ); // true
```

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
  moutLangType = require('mout-lang-type');

// Use the overall module:
moutLangType.lang.instanceOf( [], Array ); // true
moutLangType.lang.typeOf( null ) === 'null'; // true


// Load all lang utilities:
var
  lang = require('mout-lang-type/lang');

// Use the lang utilities:
lang.isPrimitive( false ); // true
lang.isType( new String('foo'), 'string'); // true


// Load the individual utilities:
var
  isComplex = require('mout-lang-type/lang/isComplex'),
  isFunction = require('mout-lang-type/lang/isFunction');

// Use the individual utilities:
isComplex( new String('bar') ); // true
isFunction( Array ); // true
```
Keep in mind that the module’s name `mout-lang-type` in AMD is actually just the module’s root directory and can differ from the example above depending on your deployed scripts directory structure.

## Policy

This is communist software. It is crafted with heart and soul to the best of the author’s knowledge and belief: _Not for profit but to satisfy the concrete needs._ Do whatever you want with it (as long as you keep the author’s copyright notice in all copies or substantial portions of it included) for free. Imagine how the world could be if others would produce and distribute their products for the same benefits and ask yourself why they’re actually not.

## License

This software is licensed under [MIT License](LICENSE.md).

Copyright © 2015 [Christian Grete](https://christiangrete.com)
- [GitHub](https://github.com/ChristianGrete)
- [npm](https://www.npmjs.com/~christiangrete)
- [Twitter](https://twitter.com/ChristianGrete)
- [XING](https://www.xing.com/profile/Christian_Grete2)