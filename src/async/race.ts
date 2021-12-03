import delay from './delay'
import { every } from '../predicates'
import { keys } from '../structures'
import length from '../length'

type RaceParam<T> = number | Promise<T>
type RaceUnaryProps<T> = {
  contender: Promise<T>
  timeout: number
}
type RaceParamOne<T> = RaceParam<T> | RaceUnaryProps<T>

async function raceUnary<T>({
  contender,
  timeout,
}: RaceUnaryProps<T>): Promise<T> {
  const raced: T | RangeError = await Promise.race([
    contender,
    delay(timeout, (duration: number) => {
      return new RangeError(`Timeout after ${duration} ms`)
    }),
  ])

  if (raced instanceof RangeError) throw raced

  return raced
}

function isUnary<T>(param: RaceParamOne<T>): param is RaceUnaryProps<T> {
  const keyNames: string[] = keys(param),
    unaryKeyNames: string[] = ['contender', 'timeout']

  return (
    length(keyNames) === length(unaryKeyNames) &&
    every((value) => keyNames.includes(value), unaryKeyNames)
  )
}

const race = <
  {
    <T>(props: RaceUnaryProps<T>): Promise<T>
    <T>(contender: Promise<T>, timeout: number): Promise<T>
    <T>(timeout: number, contender: Promise<T>): Promise<T>
    <T>(contender: Promise<T>): (timeout: number) => Promise<T>
    (timeout: number): <T>(contender: Promise<T>) => Promise<T>
  }
>function race<T>(paramOne: RaceParamOne<T>, paramTwo?: RaceParam<T>) {
  if (paramTwo || paramTwo === 0) {
    if (typeof paramOne === 'object') {
      return raceUnary({
        contender: <Promise<T>>paramOne,
        timeout: <number>paramTwo,
      })
    } else {
      return raceUnary({ contender: <Promise<T>>paramTwo, timeout: paramOne })
    }
  } else if (typeof paramOne === 'number') {
    return (contender: Promise<T>) =>
      raceUnary({ contender, timeout: paramOne })
  } else if (!isUnary(paramOne)) {
    return (timeout: number) => raceUnary({ timeout, contender: paramOne })
  } else {
    return raceUnary(paramOne)
  }
}

export default race
