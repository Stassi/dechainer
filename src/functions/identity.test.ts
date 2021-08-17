import identity from './identity'

describe('identity', () => {
  describe.each([0n, true, null, -0, 0, Infinity, NaN, 'a', undefined])(
    'input: %s',
    (expected: bigint | boolean | null | number | string | undefined) => {
      it('should return a value identical to its parameter', () => {
        expect(identity(expected)).toStrictEqual(expected)
      })
    }
  )
})
