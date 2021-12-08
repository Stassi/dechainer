# Dechainer

![npm](https://img.shields.io/npm/v/dechainer?style=plastic)
![GitHub](https://img.shields.io/github/license/Stassi/dechainer?style=plastic)
![npm type definitions](https://img.shields.io/npm/types/dechainer?style=plastic)
![node-current](https://img.shields.io/node/v/dechainer?style=plastic)
![size repository](https://img.shields.io/github/languages/code-size/Stassi/dechainer?style=plastic)
![size minified](https://img.shields.io/bundlephobia/min/dechainer?style=plastic)
![size minzip ](https://img.shields.io/bundlephobia/minzip/dechainer?style=plastic)
[![codecov](https://codecov.io/gh/Stassi/dechainer/branch/main/graph/badge.svg?token=jnQwb2i7gw)](https://codecov.io/gh/Stassi/dechainer)
[![Continuous integration](https://github.com/Stassi/dechainer/actions/workflows/ci.yml/badge.svg)](https://github.com/Stassi/dechainer/actions/workflows/ci.yml)
[![CodeQL](https://github.com/Stassi/dechainer/actions/workflows/codeql.yml/badge.svg)](https://github.com/Stassi/dechainer/actions/workflows/codeql.yml)

**Dechainer** is a [Node.js](https://en.wikipedia.org/wiki/Node.js) [library](<https://en.wikipedia.org/wiki/Library_(computing)>) written in [TypeScript](https://en.wikipedia.org/wiki/TypeScript) containing versatile [utilities](https://en.wikipedia.org/wiki/Utility_software) designed to aid [development](https://en.wikipedia.org/wiki/Software_development) in the [functional programming paradigm](https://en.wikipedia.org/wiki/Functional_programming).

## Installation

```Shell
npm i dechainer
```

## Imports

Contrived examples demonstrating how to import functions and types from this library.

### JavaScript

```javascript
import { identity } from 'dechainer'

const example = identity('a string')
// example === 'a string'
```

### TypeScript

```typescript
import type { IdentityCallback } from 'dechainer'
import { identity } from 'dechainer'

const stringIdentity: IdentityCallback<string> = (param: string): string =>
    identity(param),
  example: string = stringIdentity('a string')
// example === 'a string'
```

## Interface

### async

#### delay

Delay the execution of asynchronous code by a specified duration.

- `delayable` is a callback function with optional `duration` parameter (e.g.: `(duration) => console.log(duration)`).
- `duration` is the time in milliseconds that should elapse before `delayable` is called.

##### Unary

```javascript
await delay({ delayable, duration })
```

##### Binary

Parameters can be provided in any order.

```javascript
await delay(delayable, duration)
// or
await delay(duration, delayable)
```

##### Curried

Parameters can be provided in any order.

```javascript
await delay(delayable)(duration)
// or
await delay(duration)(delayable)
```
