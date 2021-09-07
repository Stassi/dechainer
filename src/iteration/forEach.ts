import type { Callback } from '../functions'

type ForEacher<T> = (value: T, index: number, array: T[]) => void

export default function forEach<T>(x: ForEacher<T>): Callback<T[], void>
export default function forEach<T>(x: ForEacher<T>, y: T[]): void
export default function forEach<T>(x: T[]): Callback<ForEacher<T>, void>
export default function forEach<T>(x: T[], y: ForEacher<T>): void
export default function forEach<T>(
  x: T[] | ForEacher<T>,
  y?: T[] | ForEacher<T>
): void | Callback<T[], void> | Callback<ForEacher<T>, void> {
  if (Array.isArray(x)) {
    return y
      ? x.forEach(<ForEacher<T>>y)
      : (a: ForEacher<T>): void => x.forEach(a)
  } else {
    return y ? (<T[]>y).forEach(x) : (a: T[]): void => a.forEach(x)
  }
}
