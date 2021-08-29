import { Always } from './Callback'

export default function always<T>(x: T): Always<T> {
  return (): T => x
}
