import type {
  Always,
  Callback,
  CallbackBinary,
  CallbackCurried,
  CallbackOptional,
  IdentityBinaryCallback,
  IdentityBinaryCurried,
  IdentityCallback,
  IdentityMapCallback,
  IdentityNAryCurried,
  ForEachCallback,
  MapCallback,
  NumberBinaryCallback,
  NumberBinaryCurried,
  NumberCallback,
  NumberMapCallback,
  NumberNAryCurried,
  NumberPredicate,
  Predicate,
  ReduceCallback,
} from './Callback'
import always from './always'
import curryBinary from './curryBinary'
import identity from './identity'

export type {
  Always,
  Callback,
  CallbackBinary,
  CallbackCurried,
  CallbackOptional,
  IdentityBinaryCallback,
  IdentityBinaryCurried,
  IdentityCallback,
  IdentityMapCallback,
  IdentityNAryCurried,
  ForEachCallback,
  MapCallback,
  NumberBinaryCallback,
  NumberBinaryCurried,
  NumberCallback,
  NumberMapCallback,
  NumberNAryCurried,
  NumberPredicate,
  Predicate,
  ReduceCallback,
}
export { always, curryBinary, identity }
