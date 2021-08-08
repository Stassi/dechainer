export type Callback<I, O> = (x: I) => O

export type IdentityCallback<T> = Callback<T, T>

export type NumberCallback = IdentityCallback<number>

export type ReducerCallback<T> = Callback<T[], T>
