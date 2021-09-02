import type {
  MapCallback,
  NumberBinaryCallback,
  NumberNAryCurried,
} from '../functions'
import { head } from '../arrayAccessors'
import length from '../length'
import { map, reduce } from '../iteration'

const mapNAryOperation: MapCallback<NumberBinaryCallback, NumberNAryCurried> =
  map(
    (operation: NumberBinaryCallback): NumberNAryCurried =>
      <NumberNAryCurried>(
        ((...n: number[]) =>
          length(n) === 1
            ? (x: number): number => operation(head(n), x)
            : reduce(operation, n))
      )
  )

export const [add, multiply, exponentiate]: NumberNAryCurried[] =
  mapNAryOperation([
    (x: number, y: number): number => x + y,
    (x: number, y: number): number => x * y,
    (x: number, y: number): number => x ** y,
  ])
