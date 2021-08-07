import type { NumberCallback } from '../functions'
import { isNumber } from '../typePredicates'
import { negate, reciprocal } from './inversions'

type NumberOrCallback = number | NumberCallback

export function add(a: number): NumberCallback
export function add(a: number, b: number): number
export function add(a: number, b?: number): NumberOrCallback {
  return isNumber(b) ? a + b : (c: number): number => a + c
}

export function subtract(a: number): NumberCallback
export function subtract(a: number, b: number): number
export function subtract(a: number, b?: number): NumberOrCallback {
  const subtractFirstParam: NumberCallback = add(negate(a))
  return isNumber(b) ? subtractFirstParam(b) : subtractFirstParam
}

export function multiply(a: number): NumberCallback
export function multiply(a: number, b: number): number
export function multiply(a: number, b?: number): NumberOrCallback {
  return isNumber(b) ? a * b : (c: number): number => a * c
}

export function divide(a: number): NumberCallback
export function divide(a: number, b: number): number
export function divide(a: number, b?: number): NumberOrCallback {
  const divideByFirstParam: NumberCallback = multiply(reciprocal(a))
  return isNumber(b) ? divideByFirstParam(b) : divideByFirstParam
}
