import identity from './identity'

describe('identity', () => {
  describe.each([0n, true, null, 1, Infinity, NaN, 'a', undefined])(
    'input: %s',
    (expected: unknown) => {
      it('should return a value identical to its parameter', () => {
        expect(identity(expected)).toStrictEqual(expected)
      })
    }
  )
})
