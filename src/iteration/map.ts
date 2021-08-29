import type { MapCallback } from '../functions'
import { curryBinary } from '../functions'

type Mapper<T, U> = (value: T, index: number, array: T[]) => U

export default function map<T, U>(x: Mapper<T, U>): MapCallback<T, U>
export default function map<T, U>(x: Mapper<T, U>, y: T[]): U[]
export default function map<T, U>(
  x: Mapper<T, U>,
  y?: T[]
): U[] | MapCallback<T, U> {
  const mapBinary = (mapper: Mapper<T, U>, a: T[]): U[] => a.map(mapper)
  return y ? mapBinary(x, y) : curryBinary(mapBinary)(x)
}
