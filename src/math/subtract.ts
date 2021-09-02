import type { NumberCallback } from '../functions'
import { negate } from './inversions'

export default function subtract(x: number): NumberCallback
export default function subtract(x: number, y: number): number
export default function subtract(
  x: number,
  y?: number
): number | NumberCallback {
  return y || y === 0 ? y + negate(x) : (z: number): number => z + negate(x)
}
