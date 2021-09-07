import type { NumberCallback } from '../functions'

export default function remainder(x: number): NumberCallback
export default function remainder(x: number, y: number): number
export default function remainder(
  x: number,
  y?: number
): number | NumberCallback {
  return y || y === 0 ? y % x : (z: number): number => z % x
}
