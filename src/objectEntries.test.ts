import { entries, fromEntries } from './objectEntries'

describe('object entry methods', () => {
  describe.each([
    {
      expected: [
        ['a', 0],
        ['b', 1],
        ['c', 2],
      ],
      input: { a: 0, b: 1, c: 2 },
    },
    {
      expected: [
        ['a', 2],
        ['b', 1],
        ['c', 0],
      ],
      input: { a: 2, b: 1, c: 0 },
    },
  ])(
    'input: $input',
    ({
      expected,
      input,
    }: {
      expected: (string | number)[][]
      input: Record<'a' | 'b' | 'c', number>
    }) => {
      describe('entries', () => {
        it('should return key-value pairs', () => {
          expect(entries(input)).toStrictEqual(expected)
        })
      })

      describe('fromEntries', () => {
        it('should return an object assembled from key-value pairs', () => {
          expect(fromEntries(expected)).toStrictEqual(input)
        })
      })
    }
  )
})
