import type { ReduceCallback } from './functions'

function atIndex<T>(i: number): ReduceCallback<T> {
  return (a: T[]): T => a[i]
}

export const head: <T>(a: T[]) => T = atIndex(0)
