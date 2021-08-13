export type Callback<I, O> = (x: I) => O
export type CallbackOptional<I, O> = (x?: I) => O

export type IdentityCallback<T> = Callback<T, T>
export type IdentityBinaryCallback<T> = (x: T, y: T) => T

export type IdentityCurried<T> = {
  (x: T): IdentityCallback<T>
}

export type IdentityBinaryCurried<T> = IdentityCurried<T> & {
  (x: T, y: T): T
}

export type IdentityNaryCurried<T> = IdentityCurried<T> & {
  (...x: T[]): T
}

export type NumberCallback = IdentityCallback<number>
export type NumberBinaryCallback = IdentityBinaryCallback<number>
export type NumberBinaryCurried = IdentityBinaryCurried<number>
export type NumberNaryCurried = IdentityNaryCurried<number>

export type MapCallback<I, O> = Callback<I[], O[]>
export type ReducerCallback<T> = Callback<T[], T>
