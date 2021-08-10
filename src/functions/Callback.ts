export type Callback<I, O> = (x: I) => O

export type IdentityCallback<T> = Callback<T, T>
export type IdentityBinaryCallback<T> = (x: T, y: T) => T
export type IdentityCurriedCallback<T> = {
  (x: T): IdentityCallback<T>
  (...x: T[]): T
}

export type NumberCallback = IdentityCallback<number>
export type NumberBinaryCallback = IdentityBinaryCallback<number>
export type NumberCurriedCallback = IdentityCurriedCallback<number>

export type MapCallback<I, O> = Callback<I[], O[]>
export type ReducerCallback<T> = Callback<T[], T>
