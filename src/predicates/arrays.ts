import type { Callback, Predicate } from '../functions'

export function every<T>(predicate: Predicate<T>): Predicate<T[]>
export function every<T>(predicate: Predicate<T>, x: T[]): boolean
export function every<T>(
  predicate: Predicate<T>,
  x?: T[]
): boolean | Callback<T[], boolean> {
  return x ? x.every(predicate) : (y: T[]): boolean => y.every(predicate)
}

export function some<T>(predicate: Predicate<T>): Predicate<T[]>
export function some<T>(predicate: Predicate<T>, x: T[]): boolean
export function some<T>(
  predicate: Predicate<T>,
  x?: T[]
): boolean | Callback<T[], boolean> {
  return x ? x.some(predicate) : (y: T[]): boolean => y.some(predicate)
}
