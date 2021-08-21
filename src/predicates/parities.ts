import type { NumberCallback } from '../functions'
import { absolute, remainder } from '../math'

const remainderTwo: NumberCallback = remainder(2)

export function isEven(x: number): boolean {
  return absolute(remainderTwo(x)) !== 1
}

export function isOdd(x: number): boolean {
  return absolute(remainderTwo(x)) === 1
}
