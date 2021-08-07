import { isNumber, isString } from './typePredicates'

describe('type predicates', () => {
  describe.each([
    {
      input: null,
      expected: {
        number: false,
        string: false,
      },
    },
    {
      input: undefined,
      expected: {
        number: false,
        string: false,
      },
    },
    {
      input: NaN,
      expected: {
        number: true,
        string: false,
      },
    },
    {
      input: 1,
      expected: {
        number: true,
        string: false,
      },
    },
    {
      input: Infinity,
      expected: {
        number: true,
        string: false,
      },
    },
    {
      input: 'a',
      expected: {
        number: false,
        string: true,
      },
    },
  ])(
    'input: $input',
    ({
      input,
      expected: { number: expectedNumber, string: expectedString },
    }: {
      input: unknown
      expected: {
        number: boolean
        string: boolean
      }
    }) => {
      describe('isNumber', () => {
        it('should return true if the parameter is a number', () => {
          expect(isNumber(input)).toBe(expectedNumber)
        })
      })

      describe('isString', () => {
        it('should return true if the parameter is a string', () => {
          expect(isString(input)).toBe(expectedString)
        })
      })
    }
  )
})
