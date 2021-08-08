import type { ReducerCallback } from './functions'

function atIndex<T>(i: number): ReducerCallback<T> {
  return (a: T[]): T => a[i]
}

export const head: <T>(a: T[]) => T = atIndex(0)
