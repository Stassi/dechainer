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
  NumberPredicate,
  Predicate,
  ReduceCallback,
} from './functions'
import { identity } from './functions'
import length from './length'
import { map, reduce } from './iteration'
import { not, strictEquality } from './logic'
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
import { entries, fromEntries } from './objectEntries'
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
  entries,
  every,
  exponentiate,
  fromEntries,
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
  length,
  map,
  modulo,
  multiply,
  negate,
  MapCallback,
  not,
  NumberBinaryCallback,
  NumberBinaryCurried,
  NumberCallback,
  NumberMapCallback,
  NumberNAryCurried,
  NumberPredicate,
  reciprocal,
  reduce,
  Predicate,
  ReduceCallback,
  remainder,
  some,
  strictEquality,
  subtract,
}
