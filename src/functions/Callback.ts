export type Always<T> = () => T
export type Callback<T, U> = (x: T) => U
export type CallbackOptional<T, U> = (x?: T) => U
export type CallbackBinary<T, U, V> = (x: T, y: U) => V
export type CallbackCurried<T, U, V> = (a: T) => (b: U) => V

export type ForEachCallback<T> = Callback<T[], void>
export type MapCallback<T, U> = Callback<T[], U[]>
export type ReduceCallback<T> = Callback<T[], T>

export type IdentityCallback<T> = Callback<T, T>
export type IdentityCallbackAsync<T> = Callback<T, Promise<T>>
export type IdentityBinaryCallback<T> = (x: T, y: T) => T
export type IdentityMapCallback<T> = MapCallback<T, T>

export type IdentityCurried<T> = {
  (x: T): IdentityCallback<T>
}

export type IdentityBinaryCurried<T> = IdentityCurried<T> & {
  (x: T, y: T): T
}

export type IdentityNAryCurried<T> = IdentityCurried<T> & {
  (...x: T[]): T
}

export type Predicate<T> = Callback<T, boolean>

export type NumberCallback = IdentityCallback<number>
export type NumberBinaryCallback = IdentityBinaryCallback<number>
export type NumberBinaryCurried = IdentityBinaryCurried<number>
export type NumberNAryCurried = IdentityNAryCurried<number>
export type NumberMapCallback = IdentityMapCallback<number>

export type NumberPredicate = Predicate<number>
