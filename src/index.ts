import type {
  Callback,
  CallbackBinary,
  CallbackCurried,
  CallbackOptional,
  IdentityBinaryCallback,
  IdentityBinaryCurried,
  IdentityCallback,
  IdentityMapCallback,
  IdentityNAryCurried,
  MapCallback,
  NumberBinaryCallback,
  NumberBinaryCurried,
  NumberCallback,
  NumberMapCallback,
  NumberNAryCurried,
  Predicate,
  ReduceCallback,
} from './functions'
import { identity } from './functions'
import { every, some } from './arrayPredicates'
import { map, reduce } from './iteration'
import {
  add,
  ceiling,
  decrement,
  divide,
  exponentiate,
  floor,
  increment,
  multiply,
  negate,
  reciprocal,
  remainder,
  subtract,
} from './math'
import { isEven, isOdd } from './parityPredicates'
import { isNumber, isString } from './typePredicates'

export {
  add,
  Callback,
  CallbackBinary,
  CallbackCurried,
  CallbackOptional,
  ceiling,
  decrement,
  divide,
  every,
  exponentiate,
  identity,
  IdentityBinaryCallback,
  IdentityBinaryCurried,
  IdentityCallback,
  IdentityMapCallback,
  IdentityNAryCurried,
  increment,
  isEven,
  isNumber,
  isOdd,
  isString,
  floor,
  map,
  multiply,
  negate,
  MapCallback,
  NumberBinaryCallback,
  NumberBinaryCurried,
  NumberCallback,
  NumberMapCallback,
  NumberNAryCurried,
  reciprocal,
  reduce,
  Predicate,
  ReduceCallback,
  remainder,
  some,
  subtract,
}
