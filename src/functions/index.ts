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
} from './Callback'
import curryBinary from './curryBinary'
import identity from './identity'

export type {
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
}
export { curryBinary, identity }
