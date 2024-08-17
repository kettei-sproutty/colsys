# colsys

![npm bundle size](https://img.shields.io/bundlephobia/min/colsys)
![NPM Version](https://img.shields.io/npm/v/colsys)
![NPM Downloads](https://img.shields.io/npm/dw/colsys)

WIP light and zero-dependecy terminal string styling library.

## Guide

```ts
import colsys from 'colsys';

// modifiers
colsys.bold("bold");

// colors
colsys.red("red");

// background
colsys.bgRed("bgRed");

// chaining
colsys.bold.bgBlack.white("Hello, world!");
```

## Roadmap

- [x] Typescript support
- [ ] Chalk basic compatibility
  - [x] Combine styled and normal strings
  - [x] Compose multiple styles using the chainable API
  - [x] Pass in multiple arguments
  - [x] Nest styles
  - [ ] Nest styles of the same type even (color, underline, background)
  - [x] Works with ES2015 template literal
- [ ] Chalk advanced compatibility
  - [ ] RGB
  - [ ] HEX

## LICENSE

All code in this repository is dual-licensed under either:

- MIT License [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
- Apache License, Version 2.0 [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)
