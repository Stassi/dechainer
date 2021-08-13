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

export const [add, multiply, exponentiate]: NumberCurriedCallback[] =
  mapHyperoperation([
    (x: number, y: number): number => x + y,
    (x: number, y: number): number => x * y,
    (x: number, y: number): number => x ** y,
  ])

export const [subtract, divide, remainder]: NumberCurriedCallback[] =
  mapHyperoperation([
    (x: number, y: number): number => y + negate(x),
    (x: number, y: number): number => y * reciprocal(x),
    (x: number, y: number): number => y % x,
  ])
