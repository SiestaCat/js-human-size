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
