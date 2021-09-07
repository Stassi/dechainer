import type { NumberCallback } from '../functions'
import { reciprocal } from './inversions'

export default function divide(x: number): NumberCallback
export default function divide(x: number, y: number): number
export default function divide(x: number, y?: number): number | NumberCallback {
  return y || y === 0
    ? y * reciprocal(x)
    : (z: number): number => z * reciprocal(x)
}
