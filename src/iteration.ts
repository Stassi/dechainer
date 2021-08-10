import type { Callback } from './functions'

interface Mapper<I, O> {
  (value: I, index: number, array: I[]): O
}

interface Reducer<T> {
  (previousValue: T, currentValue: T, currentIndex: number, array: T[]): T
}

export function map<I, O>(mapper: Mapper<I, O>): Callback<I[], O[]> {
  return (a: I[]): O[] => a.map(mapper)
}

export function reduce<T>(reducer: Reducer<T>) {
  return (a: T[]): T => a.reduce(reducer)
}
