import type { NumberBinaryCallback, NumberCallback } from './functions'
import counter from './counter'
import { forEach, map, reduce } from './iteration'
import { add, decrement, increment, multiply } from './math'

type Counter = Record<'count', () => number> &
  Record<'increment' | 'reset', () => void>

describe('iteration', () => {
  describe.each([
    {
      input: [0],
      expected: {
        add: 0,
        decrement: [-1],
        increment: [1],
        length: 1,
        multiply: 0,
      },
    },
    {
      input: [1, 2, 3],
      expected: {
        add: 6,
        decrement: [0, 1, 2],
        increment: [2, 3, 4],
        length: 3,
        multiply: 6,
      },
    },
    {
      input: [2, 4, 6],
      expected: {
        add: 12,
        decrement: [1, 3, 5],
        increment: [3, 5, 7],
        length: 3,
        multiply: 48,
      },
    },
  ])(
    'input: $input',
    ({
      input,
      expected,
    }: {
      input: number[]
      expected: Record<string, number | number[]>
    }) => {
      describe('forEach(...)', () => {
        describe('increment counter', () => {
          const {
            count,
            increment: incrementCounter,
            reset: resetCounter,
          }: Counter = counter()

          beforeEach(resetCounter)

          const expectedLength: number = <number>expected.length

          describe('curried', () => {
            it(`should increment ${expectedLength} times`, () => {
              forEach(incrementCounter)(input)

              expect(count()).toBe(expectedLength)
            })
          })

          describe('uncurried', () => {
            it(`should increment ${expectedLength} times`, () => {
              forEach(incrementCounter, input)

              expect(count()).toBe(expectedLength)
            })
          })

          describe('flipped, curried', () => {
            it(`should increment ${expectedLength} times`, () => {
              forEach(input)(incrementCounter)

              expect(count()).toBe(expectedLength)
            })
          })

          describe('flipped, uncurried', () => {
            it(`should increment ${expectedLength} times`, () => {
              forEach(input, incrementCounter)

              expect(count()).toBe(expectedLength)
            })
          })
        })
      })

      describe('map(...)', () => {
        describe.each([
          {
            mapper: decrement,
            name: 'decrement',
          },
          {
            mapper: increment,
            name: 'increment',
          },
        ])(
          'map($name)',
          ({ mapper, name }: { mapper: NumberCallback; name: string }) => {
            it(`should return ${name}ed values`, () => {
              expect(map(mapper)(input)).toStrictEqual(expected[name])
              expect(map(mapper, input)).toStrictEqual(expected[name])
            })
          }
        )
      })

      describe('reduce(...)', () => {
        describe.each([
          {
            name: 'add',
            reducer: (x: number, y: number): number => add(x, y),
          },
          {
            name: 'multiply',
            reducer: (x: number, y: number): number => multiply(x, y),
          },
        ])(
          'reduce($name)',
          ({
            name,
            reducer,
          }: {
            name: string
            reducer: NumberBinaryCallback
          }) => {
            it(`should return ${name}ed values`, () => {
              expect(reduce(reducer)(input)).toBe(expected[name])
              expect(reduce(reducer, input)).toBe(expected[name])
            })
          }
        )
      })
    }
  )
})
