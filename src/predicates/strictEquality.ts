import type { Predicate } from '../functions'

export default function strictEquality<T>(x: T): Predicate<T> {
  return (y: T): boolean => x === y
}
