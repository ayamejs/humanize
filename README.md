# `@ayamejs/humanize`
Utilities to convert data into human readable strings.

## Install
```sh
$ npm install @ayamejs/usage
```
TypeScript typings included.

## Usage
```js
const humanize = require("@ayamejs/humanize");

humanize.duration(1000); // => 1s
humanize.bytes(3000); // => 2.93 KB
humanize.oridinal(3); // => 3rd
```

## Changelog

#### v0.2.0
- Added `ordinal` function.

#### v0.1.0
- Initial release.

## License
[MIT License](LICENSE)
