import type { ForEachCallback, MapCallback, ReduceCallback } from './functions'
import { curryBinary } from './functions'

type ForEacher<T> = (value: T, index: number, array: T[]) => void
type Mapper<T, U> = (value: T, index: number, array: T[]) => U
type Reducer<T> = (
  previousValue: T,
  currentValue: T,
  currentIndex: number,
  array: T[]
) => T

export function forEach<T>(x: ForEacher<T>): ForEachCallback<T>
export function forEach<T>(x: ForEacher<T>, y: T[]): void
export function forEach<T>(
  x: ForEacher<T>,
  y?: T[]
): void | ForEachCallback<T> {
  return y ? y.forEach(x) : (a: T[]) => a.forEach(x)
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
