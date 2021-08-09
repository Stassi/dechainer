import type { NumberCallback, ReducerCallback } from '../functions'
import { head } from '../arrayAccessors'
import { isNumber } from '../typePredicates'
import length from '../length'
import { reduce } from '../iteration'
import { negate, reciprocal } from './inversions'

type NumberOrCallback = number | NumberCallback

function elementaryAdd(x: number, y: number): number {
  return x + y
}

function elementaryMultiply(x: number, y: number): number {
  return x * y
}

function elementaryExponentiate(base: number, exponent: number): number {
  return base ** exponent
}

const reduceElementaryAdd: ReducerCallback<number> = reduce(elementaryAdd)
const reduceElementaryMultiply: ReducerCallback<number> =
  reduce(elementaryMultiply)
const reduceElementaryExponentiate: ReducerCallback<number> = reduce(
  elementaryExponentiate
)

export function add(addend: number): NumberCallback
export function add(...addends: number[]): number
export function add(...addends: number[]): NumberOrCallback {
  return length(addends) === 1
    ? (n: number): number => elementaryAdd(n, head(addends))
    : reduceElementaryAdd(addends)
}

export function subtract(a: number): NumberCallback
export function subtract(a: number, b: number): number
export function subtract(a: number, b?: number): NumberOrCallback {
  const subtractFirstParam: NumberCallback = add(negate(a))
  return isNumber(b) ? subtractFirstParam(b) : subtractFirstParam
}

export function multiply(factor: number): NumberCallback
export function multiply(...factors: number[]): number
export function multiply(...factors: number[]): NumberOrCallback {
  return length(factors) === 1
    ? (n: number): number => elementaryMultiply(n, head(factors))
    : reduceElementaryMultiply(factors)
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
export function exponentiate(...exponents: number[]): NumberOrCallback {
  return length(exponents) === 1
    ? (exponent: number): number =>
        elementaryExponentiate(head(exponents), exponent)
    : reduceElementaryExponentiate(exponents)
}
