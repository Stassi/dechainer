import type { Callback, NumberBinaryCallback } from '../functions'
import hyperoperation from './hyperoperation'
import { map } from '../iteration'
import { negate, reciprocal } from './inversions'

type Hyperoperation = ReturnType<typeof hyperoperation>
type MapHyperoperation = Callback<NumberBinaryCallback[], Hyperoperation[]>

const mapHyperoperation: MapHyperoperation = map(hyperoperation)

export const [
  add,
  subtract,
  multiply,
  divide,
  exponentiate,
  remainder,
]: Hyperoperation[] = mapHyperoperation([
  (x: number, y: number): number => x + y,
  (x: number, y: number): number => negate(x) + y,
  (x: number, y: number): number => x * y,
  (x: number, y: number): number => reciprocal(x) * y,
  (x: number, y: number): number => x ** y,
  (x: number, y: number): number => y % x,
])
