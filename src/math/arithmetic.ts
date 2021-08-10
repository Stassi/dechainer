import type {
  MapCallback,
  NumberBinaryCallback,
  NumberCurriedCallback,
} from '../functions'
import hyperoperation from './hyperoperation'
import { map } from '../iteration'
import { negate, reciprocal } from './inversions'

const mapHyperoperation: MapCallback<
  NumberBinaryCallback,
  NumberCurriedCallback
> = map(hyperoperation)

export const [
  add,
  subtract,
  multiply,
  divide,
  exponentiate,
  remainder,
]: NumberCurriedCallback[] = mapHyperoperation([
  (x: number, y: number): number => x + y,
  (x: number, y: number): number => negate(x) + y,
  (x: number, y: number): number => x * y,
  (x: number, y: number): number => reciprocal(x) * y,
  (x: number, y: number): number => x ** y,
  (x: number, y: number): number => y % x,
])
