import type { Callback, ReduceCallback } from './functions'

export function atIndex<T>(x: number): ReduceCallback<T>
export function atIndex<T>(x: number, y: T[]): T
export function atIndex<T>(x: number, y?: T[]): T | ReduceCallback<T> {
  return y ? y[x] : (z: T[]): T => z[x]
}

export function indexOf<T>(x: T[]): Callback<number, T>
export function indexOf<T>(x: T[], y: number): T
export function indexOf<T>(x: T[], y?: number): T | Callback<number, T> {
  return typeof y === 'number' ? x[y] : (z: number): T => x[z]
}

export const head: <T>(a: T[]) => T = atIndex(0)
