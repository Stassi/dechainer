import type { NumberCallback } from './functions'
import { subtract } from './math'

export const { now }: DateConstructor = Date

export function durationTimer(): () => number {
  const subtractFromStart: NumberCallback = subtract(now())
  return () => subtractFromStart(now())
}
