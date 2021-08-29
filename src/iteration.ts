import type { Callback, MapCallback, ReduceCallback } from './functions'
import { curryBinary } from './functions'

type ForEacher<T> = (value: T, index: number, array: T[]) => void
type Mapper<T, U> = (value: T, index: number, array: T[]) => U
type Reducer<T> = (
  previousValue: T,
  currentValue: T,
  currentIndex: number,
  array: T[]
) => T

export function forEach<T>(x: ForEacher<T>): Callback<T[], void>
export function forEach<T>(x: ForEacher<T>, y: T[]): void
export function forEach<T>(x: T[]): Callback<ForEacher<T>, void>
export function forEach<T>(x: T[], y: ForEacher<T>): void
export function forEach<T>(
  x: T[] | ForEacher<T>,
  y?: T[] | ForEacher<T>
): void | Callback<T[], void> | Callback<ForEacher<T>, void> {
  if (Array.isArray(x)) {
    return y
      ? x.forEach(<ForEacher<T>>y)
      : (a: ForEacher<T>): void => x.forEach(a)
  } else {
    return y ? (<T[]>y).forEach(x) : (a: T[]): void => a.forEach(x)
  }
}

export function map<T, U>(x: Mapper<T, U>): MapCallback<T, U>
export function map<T, U>(x: Mapper<T, U>, y: T[]): U[]
export function map<T, U>(x: Mapper<T, U>, y?: T[]): U[] | MapCallback<T, U> {
  const mapBinary = (mapper: Mapper<T, U>, a: T[]): U[] => a.map(mapper)
  return y ? mapBinary(x, y) : curryBinary(mapBinary)(x)
}

export function reduce<T>(x: Reducer<T>): ReduceCallback<T>
export function reduce<T>(x: Reducer<T>, y: T[]): T
export function reduce<T>(x: Reducer<T>, y?: T[]): T | ReduceCallback<T> {
  const reduceBinary = (reducer: Reducer<T>, a: T[]): T => a.reduce(reducer)
  return y ? reduceBinary(x, y) : curryBinary(reduceBinary)(x)
}
