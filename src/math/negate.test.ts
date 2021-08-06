import negate from './negate'

describe('negate', () => {
  describe.each([
    {
      input: -1,
      expected: 1,
    },
    {
      input: -0,
      expected: 0,
    },
    {
      input: 0,
      expected: -0,
    },
    {
      input: 1,
      expected: -1,
    },
  ])(
    'input: $input',
    ({ expected, input }: { expected: number; input: number }) => {
      it('should return the negated input', () => {
        expect(negate(input)).toBe(expected)
      })
    }
  )
})
