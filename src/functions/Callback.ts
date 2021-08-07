export type Callback<Param, Returns> = (x: Param) => Returns

export type IdentityCallback<Param> = Callback<Param, Param>

export type NumberCallback = IdentityCallback<number>
