import type { IdentityCallback } from './functions'

export type State<T> = {
  get: () => T
  set: (fn: IdentityCallback<T>) => void
}

export default function state<T>(x: T): State<T> {
  let inner: T = x

  return {
    get: (): T => inner,
    set: (setter: IdentityCallback<T>): void => {
      inner = setter(inner)
    },
  }
}
