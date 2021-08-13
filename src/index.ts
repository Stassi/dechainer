import type {
  Callback,
  IdentityBinaryCallback,
  IdentityBinaryCurried,
  IdentityCallback,
  IdentityNaryCurried,
  MapCallback,
  NumberBinaryCallback,
  NumberBinaryCurried,
  NumberCallback,
  NumberNaryCurried,
  ReducerCallback,
} from './functions'
import { identity } from './functions'
import { isNumber, isString } from './typePredicates'
import {
  add,
  ceiling,
  decrement,
  divide,
  floor,
  increment,
  multiply,
  negate,
  reciprocal,
  remainder,
  subtract,
} from './math'

export {
  add,
  Callback,
  ceiling,
  decrement,
  divide,
  identity,
  IdentityBinaryCallback,
  IdentityBinaryCurried,
  IdentityCallback,
  IdentityNaryCurried,
  increment,
  isNumber,
  isString,
  floor,
  multiply,
  negate,
  MapCallback,
  NumberBinaryCallback,
  NumberBinaryCurried,
  NumberCallback,
  NumberNaryCurried,
  reciprocal,
  ReducerCallback,
  remainder,
  subtract,
}
