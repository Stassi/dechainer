import { negate, reciprocal } from './inversions'

describe('inversions', () => {
  describe.each([
    {
      input: -1,
      expected: {
        negative: 1,
        reciprocal: -1,
      },
    },
    {
      input: -0,
      expected: {
        negative: 0,
        reciprocal: -Infinity,
      },
    },
    {
      input: 0,
      expected: {
        negative: -0,
        reciprocal: Infinity,
      },
    },
    {
      input: 1,
      expected: {
        negative: -1,
        reciprocal: 1,
      },
    },
  ])(
    'input: $input',
    ({
      input,
      expected: { negative: expectedNegative, reciprocal: expectedReciprocal },
    }: {
      input: number
      expected: {
        negative: number
        reciprocal: number
      }
    }) => {
      describe('negate', () => {
        it('should return the additive inverse', () => {
          expect(negate(input)).toBe(expectedNegative)
        })
      })

      describe('reciprocal', () => {
        it('should return the multiplicative inverse', () => {
          expect(reciprocal(input)).toBe(expectedReciprocal)
        })
      })
    }
  )
})
