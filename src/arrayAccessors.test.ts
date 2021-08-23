import { atIndex } from './arrayAccessors'

type NumberOrString = number | string

describe('array accessors', () => {
  describe.each([
    {
      expected: [0, 1],
      input: [0, 1, 2],
    },
    {
      expected: ['a', 'b'],
      input: ['a', 'b', 'c'],
    },
  ])(
    '$input',
    ({
      expected,
      input,
    }: {
      expected: NumberOrString[]
      input: NumberOrString[]
    }) => {
      describe.each([0, 1])('index: %i', (n: number) => {
        const expectedElement: NumberOrString = expected[n]

        it(`should be element: ${expectedElement}`, () => {
          expect(atIndex(n)(input)).toBe(expectedElement)
        })
      })
    }
  )
})
