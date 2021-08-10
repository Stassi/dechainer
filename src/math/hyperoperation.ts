import type { NumberBinaryCallback, NumberCurriedCallback } from '../functions'
import { head } from '../arrayAccessors'
import length from '../length'
import { reduce } from '../iteration'

export default function hyperoperation(
  operation: NumberBinaryCallback
): NumberCurriedCallback {
  return <NumberCurriedCallback>(
    ((...n: number[]) =>
      length(n) === 1
        ? (x: number): number => operation(head(n), x)
        : reduce(operation)(n))
  )
}
