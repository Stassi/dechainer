import type { NumberBinaryCallback, NumberCallback } from '../functions'
import { head } from '../arrayAccessors'
import length from '../length'
import { reduce } from '../iteration'

type Hyperoperation = {
  (n: number): NumberCallback
  (...n: number[]): number
}

export default function hyperoperation(
  operation: NumberBinaryCallback
): Hyperoperation {
  return <Hyperoperation>(
    ((...n: number[]) =>
      length(n) === 1
        ? (x: number): number => operation(head(n), x)
        : reduce(operation)(n))
  )
}
