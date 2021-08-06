import identity from './identity'

describe('identity', () => {
  describe.each([true, 1, Infinity, 'a', undefined])(
    'input: %s',
    (expected: unknown) => {
      it('should return a value identical to its parameter', () => {
        expect(identity(expected)).toStrictEqual(expected)
      })
    }
  )
})
