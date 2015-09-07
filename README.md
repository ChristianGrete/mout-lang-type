# mout-lang-type

[![Node.js Module Version](https://img.shields.io/npm/v/mout-lang-type.svg)](https://www.npmjs.com/package/mout-lang-type)
[![Bower Component Version](https://img.shields.io/bower/v/mout-lang-type.svg)](http://bower.io/search/?q=mout-lang-type)

> An extension to [mout](http://moutjs.com)/[lang](http://moutjs.com/docs/latest/lang.html) utilities for nerds

__mout-lang-type__ is an extension to [MOUT](http://moutjs.com)’s _[lang](http://moutjs.com/docs/latest/lang.html)_ utilities. It provides two modules: A `typeOf` and an `isType` function to be used instead of the included `kindOf` and `isKind` functions but depend on them. The difference is that __types__ are expressed in _lowerCamelCase_ and represent the built-in objects `[[Class]]` internal slot tags while MOUT’s __kinds__ are expressed in _UpperCamelCase_ representing the overall tags of objects, even of so-called non-standard exotic objects.

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

## License

[MIT](LICENSE.md) © [Christian Grete](https://christiangrete.com)
- [GitHub](https://github.com/ChristianGrete)
- [npm](https://www.npmjs.com/~christiangrete)
- [Twitter](https://twitter.com/ChristianGrete)
- [XING](https://www.xing.com/profile/Christian_Grete2)