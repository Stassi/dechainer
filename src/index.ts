import type { Callback, IdentityCallback } from './functions'
import { identity } from './functions'
import { add, ceiling, floor, multiply } from './math'
import { isNumber, isString } from './typePredicates'

export type { Callback, IdentityCallback }
export { add, ceiling, identity, isNumber, isString, floor, multiply }
