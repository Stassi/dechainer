import type { NumberCallback } from '../functions'
import { add } from './arithmetic'
import subtract from './subtract'

export const increment: NumberCallback = add(1)
export const decrement: NumberCallback = subtract(1)
