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

Delay code execution by a specified duration.

- `delayable` is a callback function with an optional `duration` parameter (e.g.: `(duration) => console.log(duration)`).
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

#### race

Race asynchronous code execution against a specified [timeout](<https://en.wikipedia.org/wiki/Timeout_(computing)>).

- `contender` is an asynchronous function that resolves only if the elapsed time is less than the `timeout` duration.
- `timeout` is the time in milliseconds that should elapse before a `RangeError` is thrown.

##### Unary

```javascript
await race({ contender, timeout })
```

##### Binary

Parameters can be provided in any order.

```javascript
await race(contender, timeout)
// or
await race(timeout, contender)
```

##### Curried

Parameters can be provided in any order.

```javascript
await race(contender)(timeout)
// or
await race(timeout)(contender)
```

### counter

Counter with optional internal state and respective tradeoffs. Multiple unique counters of both types may exist without overlapping state.

#### Persistent

Persistent counter that is purely functional and side effect free with a smaller, simpler interface. Resetting is achieved by declaring a new variable. Return value(s) should be stored to be practical.

```javascript
const { decrement, increment, state } = counter({ impersistent: false })
// state === 0
// increment().state === 1
```

##### Methods

Methods returned by calling `counter({ impersistent: false })`, each returning a new persistent counter:

- `decrement` decreases the current value by `1`.
- `increment` increases the current value by `1`.

##### Properties

Properties returned by calling `counter({ impersistent: false })`:

- `state` is a number representing the counter's current value.

#### Impersistent

Impersistent counter that provides many methods that mutate its internal state. However, it only needs to be declared once. State is unique to each counter and not shared globally.

```javascript
const { count, decrement, increment, reset } = counter({ impersistent: true })
// count() === 0
// increment()
// count() === 1
```

##### Methods

Methods returned by calling `counter({ impersistent: true })`:

- `count` returns the counter's current number value.
- `decrement` is a side effect that decreases the internal value by `1`.
- `increment` is a side effect that increases the internal value by `1`.
- `reset` is a side effect that sets the internal value to `0`.
