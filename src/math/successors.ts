import type { IdentityCallback } from '../functions'
import { add } from './arithmetic'
import { negate } from './inversions'

type NumberCallback = IdentityCallback<number>

export const increment: NumberCallback = add(1)
export const decrement: NumberCallback = add(negate(1))
