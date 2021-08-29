import always from './always'

describe('always', () => {
  describe.each([0n, 0, [0], { a: 0 }, 'a'])(
    'input: %s',
    (input: bigint | number | number[] | Record<'a', number> | string) => {
      it(`should return callback: () => ${input}`, () => {
        expect(always(input)()).toBe(input)
      })
    }
  )
})
