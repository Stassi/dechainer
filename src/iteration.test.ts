import type { NumberBinaryCallback, NumberCallback } from './functions'
import { map, reduce } from './iteration'
import { add, decrement, increment, multiply } from './math'

describe('iteration', () => {
  const input: number[] = [1, 2, 3, 4]

  describe('map(...)', () => {
    describe.each([
      {
        expected: [0, 1, 2, 3],
        mapper: decrement,
        name: 'decrement',
      },
      {
        expected: [2, 3, 4, 5],
        mapper: increment,
        name: 'increment',
      },
    ])(
      'map($name)',
      ({
        expected,
        mapper,
        name,
      }: {
        expected: number[]
        mapper: NumberCallback
        name: string
      }) => {
        it(`should return ${name}ed values`, () => {
          expect(map(mapper)(input)).toStrictEqual(expected)
          expect(map(mapper, input)).toStrictEqual(expected)
        })
      }
    )
  })

  describe('reduce(...)', () => {
    describe.each([
      {
        expected: 10,
        name: 'add',
        reducer: (x: number, y: number): number => add(x, y),
      },
      {
        expected: 24,
        name: 'multiply',
        reducer: (x: number, y: number): number => multiply(x, y),
      },
    ])(
      'reduce($name)',
      ({
        expected,
        name,
        reducer,
      }: {
        expected: number
        name: string
        reducer: NumberBinaryCallback
      }) => {
        it(`should return ${name}ed values`, () => {
          expect(reduce(reducer)(input)).toBe(expected)
          expect(reduce(reducer, input)).toBe(expected)
        })
      }
    )
  })
})
