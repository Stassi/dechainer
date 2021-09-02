import type { NumberBinaryCallback, NumberCallback } from '../functions'
import { head } from '../arrayAccessors'
import length from '../length'
import { reduce } from '../iteration'

const reducer: NumberBinaryCallback = (a: number, b: number): number => a * b

export default function multiply(x: number): NumberCallback
export default function multiply(x: number, ...y: number[]): number
export default function multiply(...x: number[]): number | NumberCallback {
  return length(x) === 1
    ? (y: number): number => reducer(head(x), y)
    : reduce(reducer, x)
}
