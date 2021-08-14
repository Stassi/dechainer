import { Callback, CallbackBinary, CallbackCurried } from './Callback'

export default function curryBinary<T, U, V>(
  x: CallbackBinary<T, U, V>
): CallbackCurried<T, U, V> {
  return (a: T): Callback<U, V> =>
    (b: U): V =>
      x(a, b)
}
