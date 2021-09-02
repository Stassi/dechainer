import type { NumberCallback } from '../functions'
import { add } from './arithmetic'
import remainder from './remainder'

export default function modulo(x: number): NumberCallback
export default function modulo(x: number, y: number): number
export default function modulo(x: number, y?: number): number | NumberCallback {
  const divideFirstParam: NumberCallback = remainder(x)
  return y || y === 0
    ? divideFirstParam(add(x, divideFirstParam(y)))
    : (z: number): number => divideFirstParam(add(x, divideFirstParam(z)))
}
