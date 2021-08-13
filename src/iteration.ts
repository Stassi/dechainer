import type { MapCallback, ReduceCallback } from './functions'

export function map<T, U>(mapper: {
  (value: T, index: number, array: T[]): U
}): MapCallback<T, U> {
  return (a: T[]): U[] => a.map(mapper)
}

export function reduce<T>(reducer: {
  (previousValue: T, currentValue: T, currentIndex: number, array: T[]): T
}): ReduceCallback<T> {
  return (a: T[]): T => a.reduce(reducer)
}
