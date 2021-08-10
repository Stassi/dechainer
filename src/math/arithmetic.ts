import hyperoperation from './hyperoperation'
import { negate, reciprocal } from './inversions'

type Hyperoperation = ReturnType<typeof hyperoperation>

export const [
  add,
  subtract,
  multiply,
  divide,
  exponentiate,
  remainder,
]: Hyperoperation[] = [
  (x: number, y: number): number => x + y,
  (x: number, y: number): number => negate(x) + y,
  (x: number, y: number): number => x * y,
  (x: number, y: number): number => reciprocal(x) * y,
  (x: number, y: number): number => x ** y,
  (x: number, y: number): number => y % x,
].map(hyperoperation)
