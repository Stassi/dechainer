import type { NumberCallback } from '../functions'
import { head } from '../arrayAccessors'
import { isNumber } from '../typePredicates'
import length from '../length'
import { reduce } from '../iteration'
import { negate, reciprocal } from './inversions'

type BinaryOperation<T> = (x: T, y: T) => T
type BinaryNumberOperation = BinaryOperation<number>

type NumberOrCallback = number | NumberCallback

export function add(addend: number): NumberCallback
export function add(...addends: number[]): number
export function add(...n: number[]): NumberOrCallback {
  const operation: BinaryNumberOperation = (x: number, y: number): number =>
    x + y

  return length(n) === 1
    ? (x: number): number => operation(head(n), x)
    : reduce(operation)(n)
}

export function subtract(a: number): NumberCallback
export function subtract(a: number, b: number): number
export function subtract(a: number, b?: number): NumberOrCallback {
  const subtractFirstParam: NumberCallback = add(negate(a))
  return isNumber(b) ? subtractFirstParam(b) : subtractFirstParam
}

export function multiply(factor: number): NumberCallback
export function multiply(...factors: number[]): number
export function multiply(...n: number[]): NumberOrCallback {
  const operation: BinaryNumberOperation = (x: number, y: number): number =>
    x * y

  return length(n) === 1
    ? (x: number): number => operation(head(n), x)
    : reduce(operation)(n)
}

export function divide(a: number): NumberCallback
export function divide(a: number, b: number): number
export function divide(a: number, b?: number): NumberOrCallback {
  const divideByFirstParam: NumberCallback = multiply(reciprocal(a))
  return isNumber(b) ? divideByFirstParam(b) : divideByFirstParam
}

export function remainder(a: number): NumberCallback
export function remainder(a: number, b: number): number
export function remainder(a: number, b?: number): NumberOrCallback {
  return isNumber(b) ? b % a : (c: number): number => c % a
}

export function exponentiate(base: number): NumberCallback
export function exponentiate(base: number, ...exponents: number[]): number
export function exponentiate(...n: number[]): NumberOrCallback {
  const operation: BinaryNumberOperation = (x: number, y: number): number =>
    x ** y

  return length(n) === 1
    ? (x: number): number => operation(head(n), x)
    : reduce(operation)(n)
}
