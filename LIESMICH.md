# mout-lang-type

[![Travis CI](https://img.shields.io/travis/ChristianGrete/mout-lang-type.svg)](https://travis-ci.org/ChristianGrete/mout-lang-type)
[![Aktuellster GitHub Tag](https://img.shields.io/github/tag/ChristianGrete/mout-lang-type.svg)](https://github.com/ChristianGrete/mout-lang-type/tags)
[![Aktuellste GitHub Release](https://img.shields.io/github/release/ChristianGrete/mout-lang-type.svg)](https://github.com/ChristianGrete/mout-lang-type/releases/latest)
[![Gesamt-Downloads via GitHub](https://img.shields.io/github/downloads/ChristianGrete/mout-lang-type/latest/total.svg)](https://github.com/ChristianGrete/mout-lang-type/releases)
[![Node.js Module Version](https://img.shields.io/npm/v/mout-lang-type.svg)](https://www.npmjs.com/package/mout-lang-type)
[![Downloads via npm pro Monat](https://img.shields.io/npm/dm/mout-lang-type.svg)](https://www.npmjs.com/package/mout-lang-type)
[![Bower Component Version](https://img.shields.io/bower/v/mout-lang-type.svg)](http://bower.io/search/?q=mout-lang-type)

> Eine Erweiterung der [mout](http://moutjs.com)/[lang](http://moutjs.com/docs/latest/lang.html)-Utilities für zuverlässigere Datentyp-Tests

__mout-lang-type__ ist eine Erweiterung zu [MOUT](http://moutjs.com)s _[lang](http://moutjs.com/docs/latest/lang.html)_-Utilities. Diese umfasst zwei Hauptmodule: Eine `typeOf`- und eine `isType`-Funktion für zuverlässigeres Testen von Datentypen, bei denen die mitgelieferten `kindOf` und `isKind` Funktionen fehlschlagen würden. Der Unterschied ist, dass die mitgelieferten Funktionen ausschließlich die __String Description Tags__ der Objekte (aus älteren Spezifikationen als `[[Class]]` Internal Slot Tags bekannt) in _UpperCamelCase_ verwenden, während diese zusätzlichen Funktionen einen auf __Built-In Object Tags__ limitierten Satz in _lowerCamelCase_ verwenden und die Testergebnisse des nativen `typeof`-Operators bevorzugen, sofern möglich:
```js
kindOf( navigator ); // 'Navigator'
typeOf( navigator ); // 'object'

typeof []; // 'object'
typeOf( [] ); // 'array'
```
Diese Erweiterung liefert außerdem zwei weitere Module: Eine `instanceOf`-Funktion, die den nativen `instanceof`-Operator verbessert, indem sie Vergleiche mit primitiven Werten ermöglicht und ein Speicherleck in älteren Internet Explorer Versionen verhindert.