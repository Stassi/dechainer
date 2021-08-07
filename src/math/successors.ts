import type { NumberCallback } from '../functions'
import { add, subtract } from './arithmetic'

export const increment: NumberCallback = add(1)
export const decrement: NumberCallback = subtract(1)
