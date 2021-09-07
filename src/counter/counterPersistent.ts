import { decrement, increment } from '../math'

export type CounterPersistent = Record<'state', number> &
  Record<'decrement' | 'increment', () => CounterPersistent>

export default function counterPersistent(state: number): CounterPersistent {
  return {
    state,
    decrement: (): CounterPersistent => counterPersistent(decrement(state)),
    increment: (): CounterPersistent => counterPersistent(increment(state)),
  }
}
