import type { IdentityCallback } from '../functions'
import { isNumber } from '../typePredicates'

type NumberCallback = IdentityCallback<number>
type NumberOrCallback = number | NumberCallback

export function add(a: number): NumberCallback
export function add(a: number, b: number): number
export function add(a: number, b?: number): NumberOrCallback {
  return isNumber(b) ? a + b : (c: number): number => a + c
}

export function multiply(a: number): NumberCallback
export function multiply(a: number, b: number): number
export function multiply(a: number, b?: number): NumberOrCallback {
  return isNumber(b) ? a * b : (c: number): number => a * c
}
