import type { ReduceCallback } from './functions'

export function atIndex<T>(x: number): ReduceCallback<T>
export function atIndex<T>(x: number, y: T[]): T
export function atIndex<T>(x: number, y?: T[]): T | ReduceCallback<T> {
  return y ? y[x] : (z: T[]): T => z[x]
}

export const head: <T>(a: T[]) => T = atIndex(0)
