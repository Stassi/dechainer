import type { ReduceCallback } from '../functions'
import { curryBinary } from '../functions'

type Reducer<T> = (
  previousValue: T,
  currentValue: T,
  currentIndex: number,
  array: T[]
) => T

export default function reduce<T>(x: Reducer<T>): ReduceCallback<T>
export default function reduce<T>(x: Reducer<T>, y: T[]): T
export default function reduce<T>(
  x: Reducer<T>,
  y?: T[]
): T | ReduceCallback<T> {
  const reduceBinary = (reducer: Reducer<T>, a: T[]): T => a.reduce(reducer)
  return y ? reduceBinary(x, y) : curryBinary(reduceBinary)(x)
}
