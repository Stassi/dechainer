import type { State } from './state'
import { always } from './functions'
import { increment } from './math'
import state from './state'

type Counter = Record<'count', () => number> &
  Record<'increment' | 'reset', () => void>

export default function counter(): Counter {
  const { set, get: count }: State<number> = state(0)

  return {
    count,
    increment(): void {
      set(increment)
    },
    reset(): void {
      set(always(0))
    },
  }
}
