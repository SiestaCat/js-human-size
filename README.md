# bytes-human-readable <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Get the byte length of an ArrayBuffer, even in engines without a `.byteLength` method.

## Example

```js
const humanFileSize = require('bytes-human-readable');

console.log(humanFileSize(67229)); //67.2 KB
console.log(humanFileSize(67229, true, 2)); //67.23 KB
console.log(humanFileSize(67229, false)); //65.7 KiB
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/bytes-human-readable
[npm-version-svg]: https://versionbadg.es/SiestaCat/js-human-size.svg
[npm-badge-png]: https://nodei.co/npm/bytes-human-readable.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/bytes-human-readable.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/bytes-human-readable.svg
[downloads-url]: https://npm-stat.com/charts.html?package=bytes-human-readable