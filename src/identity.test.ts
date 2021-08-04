import identity from './identity'

type B = boolean
type N = number
type S = string
type U = undefined
type Expected = B | N | S | U

describe('identity', () => {
  describe.each([true, 1, Infinity, 'a', undefined])(
    '%s',
    (expected: Expected) => {
      it('should return a value identical to its parameter', () => {
        expect(identity(expected)).toStrictEqual(expected)
      })
    }
  )
})
