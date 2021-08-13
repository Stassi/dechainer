import type {
  MapCallback,
  NumberBinaryCallback,
  NumberBinaryCurried,
  NumberNAryCurried,
} from '../functions'
import { head } from '../arrayAccessors'
import length from '../length'
import { negate, reciprocal } from './inversions'
import { map, reduce } from '../iteration'

const mapNAryOperation: MapCallback<NumberBinaryCallback, NumberNAryCurried> =
  map(
    (operation: NumberBinaryCallback): NumberNAryCurried =>
      <NumberNAryCurried>(
        ((...n: number[]) =>
          length(n) === 1
            ? (x: number): number => operation(head(n), x)
            : reduce(operation)(n))
      )
  )

export const [add, multiply, exponentiate]: NumberNAryCurried[] =
  mapNAryOperation([
    (x: number, y: number): number => x + y,
    (x: number, y: number): number => x * y,
    (x: number, y: number): number => x ** y,
  ])

const mapBinaryOperation: MapCallback<
  NumberBinaryCallback,
  NumberBinaryCurried
> = map(
  (operation: NumberBinaryCallback): NumberBinaryCurried =>
    <NumberBinaryCurried>(
      ((...n: number[]) =>
        length(n) === 1
          ? (x: number): number => operation(head(n), x)
          : reduce(operation)(n))
    )
)

export const [subtract, divide, remainder]: NumberBinaryCurried[] =
  mapBinaryOperation([
    (x: number, y: number): number => y + negate(x),
    (x: number, y: number): number => y * reciprocal(x),
    (x: number, y: number): number => y % x,
  ])
