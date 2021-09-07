import type { Always } from '../functions'
import type { State } from '../state'
import { always } from '../functions'
import state from '../state'
import { decrement, increment } from '../math'

export type CounterImpersistent = Record<'count', Always<number>> &
  Record<'decrement' | 'increment' | 'reset', Always<void>>

export default function counterImpersistent(
  initialState: number
): CounterImpersistent {
  const { set, get: count }: State<number> = state(initialState)

  return {
    count,
    decrement(): void {
      set(decrement)
    },
    increment(): void {
      set(increment)
    },
    reset(): void {
      set(always(initialState))
    },
  }
}
