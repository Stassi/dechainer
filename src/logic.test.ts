import { not } from './logic'

describe('logic', () => {
  describe('not', () => {
    describe.each([
      {
        expected: false,
        input: true,
      },
      {
        expected: true,
        input: false,
      },
    ])(
      'input: $input',
      ({ expected, input }: Record<'expected' | 'input', boolean>) => {
        it(`should be inverted as ${expected}`, () => {
          expect(not(input)).toBe(expected)
        })
      }
    )
  })
})
