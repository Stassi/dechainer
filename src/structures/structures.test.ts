import { entries, fromEntries, keys } from './structures'

describe('structures', () => {
  describe('entry methods', () => {
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

  describe('keys', () => {
    describe.each([
      {
        input: { a: undefined, b: undefined, c: undefined },
        expected: ['a', 'b', 'c'],
      },
      {
        input: { x: undefined, y: undefined, z: undefined },
        expected: ['x', 'y', 'z'],
      },
    ])(
      'input: $input',
      ({
        expected,
        input,
      }: {
        expected: string[]
        input: { [k: string]: any }
      }) => {
        it(`should return keys: [${expected}]`, () => {
          expect(keys(input)).toEqual(expected)
        })
      }
    )
  })
})
