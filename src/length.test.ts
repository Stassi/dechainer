import length from './length'

describe('length', () => {
  describe.each([
    {
      expected: 0,
      input: [],
    },
    {
      expected: 3,
      input: [0, 1, 2],
    },
    {
      expected: 0,
      input: '',
    },
    {
      expected: 3,
      input: 'abc',
    },
  ])(
    '$input',
    ({
      expected,
      input,
    }: {
      expected: number
      input: Record<'length', number>
    }) => {
      it(`is length: ${expected}`, () => {
        expect(length(input)).toBe(expected)
      })
    }
  )
})
