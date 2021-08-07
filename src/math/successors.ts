import type { IdentityCallback } from '../functions'
import { add, subtract } from './arithmetic'

type NumberCallback = IdentityCallback<number>

export const increment: NumberCallback = add(1)
export const decrement: NumberCallback = subtract(1)
