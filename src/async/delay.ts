import type { Resolution } from './promises'

type Delayable<T> = (duration: number) => T
type DelayParam<T> = number | Delayable<T>
type DelayUnaryProps<T> = {
  delayable: Delayable<T>
  duration: number
}
type Delay<T> =
  | Promise<T>
  | ((delayable: Delayable<T>) => Promise<T>)
  | ((duration: number) => Promise<T>)

function delayUnary<T>({
  duration,
  delayable,
}: DelayUnaryProps<T>): Promise<T> {
  return new Promise((resolve: Resolution) => {
    setTimeout(() => resolve(delayable(duration)), duration)
  })
}

const delay = <
  {
    <T>(props: DelayUnaryProps<T>): Promise<T>
    <T>(delayable: Delayable<T>, duration: number): Promise<T>
    <T>(duration: number, delayable: Delayable<T>): Promise<T>
    <T>(delayable: Delayable<T>): (duration: number) => Promise<T>
    (duration: number): <T>(delayable: Delayable<T>) => Promise<T>
  }
>function delay<T>(paramOne: DelayParam<T> | DelayUnaryProps<T>, paramTwo?: DelayParam<T>): Delay<T> {
  if (paramTwo || paramTwo === 0) {
    if (typeof paramOne === 'function') {
      return delayUnary({
        delayable: paramOne,
        duration: <number>paramTwo,
      })
    } else {
      return delayUnary({
        delayable: <Delayable<T>>paramTwo,
        duration: <number>paramOne,
      })
    }
  } else if (typeof paramOne === 'object') {
    return delayUnary(paramOne)
  } else if (typeof paramOne === 'number') {
    return (delayable: Delayable<T>) =>
      delayUnary({
        delayable,
        duration: paramOne,
      })
  } else {
    return (duration: number): Promise<T> =>
      delayUnary({ duration, delayable: paramOne })
  }
}

export default delay
