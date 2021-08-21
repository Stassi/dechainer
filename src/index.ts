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
import { map, reduce } from './iteration'
import {
  add,
  ceiling,
  decrement,
  divide,
  exponentiate,
  floor,
  increment,
  modulo,
  multiply,
  negate,
  reciprocal,
  remainder,
  subtract,
} from './math'
import { every, isEven, isNumber, isOdd, isString, some } from './predicates'

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
  modulo,
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
