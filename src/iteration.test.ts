import type { NumberBinaryCallback, NumberCallback } from './functions'
import { map, reduce } from './iteration'
import { add, decrement, increment, multiply } from './math'

describe('iteration', () => {
  describe.each([
    {
      input: [1, 2, 3],
      expected: {
        add: 6,
        decrement: [0, 1, 2],
        increment: [2, 3, 4],
        multiply: 6,
      },
    },
    {
      input: [2, 4, 6],
      expected: {
        add: 12,
        decrement: [1, 3, 5],
        increment: [3, 5, 7],
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
