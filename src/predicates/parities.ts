import type { NumberCallback, NumberPredicate, Predicate } from '../functions'
import { map } from '../iteration'
import { modulo } from '../math'
import strictEquality from './strictEquality'

const modulo2: NumberCallback = modulo(2)

const mapStrictEquality: <T>(x: T[]) => Predicate<T>[] = map(strictEquality)

export const [isEven, isOdd]: NumberPredicate[] = map(
  (x: NumberPredicate): NumberPredicate =>
    (y: number): boolean =>
      x(modulo2(y)),
  mapStrictEquality([0, 1])
)
