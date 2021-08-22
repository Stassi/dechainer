import { add } from './math'
import { not, strictEquality } from './logic'

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

  describe('strict equality', () => {
    describe.each([
      {
        expected: 'a',
        input: 'a',
      },
      {
        expected: 1,
        input: 1,
      },
      {
        expected: 2,
        input: add(1, 1),
      },
    ])(
      'input: $input',
      ({ expected, input }: Record<'expected' | 'input', number | string>) => {
        it('should be strictly equal to its parameter', () => {
          expect(strictEquality(input)(expected)).toBeTruthy()
        })
      }
    )
  })
})
