import type { Predicate } from './functions'

export function not(x: boolean): boolean {
  return !x
}

export function strictEquality<T>(x: T): Predicate<T> {
  return (y: T): boolean => x === y
}
