import { increment } from './math'

type Counter = Record<'count', () => number> &
  Record<'increment' | 'reset', () => void>

export default function counter(): Counter {
  let count: number = 0

  return {
    count: (): number => count,
    increment(): void {
      count = increment(count)
    },
    reset(): void {
      count = 0
    },
  }
}
