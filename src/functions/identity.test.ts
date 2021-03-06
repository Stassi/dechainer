import identity from './identity'

describe('identity', () => {
  describe.each([
    [],
    0n,
    true,
    null,
    -0,
    0,
    Infinity,
    NaN,
    'a',
    Symbol('a'),
    undefined,
    () => {},
  ])(
    'input: %s',
    (
      expected:
        | any[]
        | bigint
        | boolean
        | null
        | number
        | string
        | symbol
        | undefined
        | (() => void)
    ) => {
      it('should return a value identical to its parameter', () => {
        expect(identity(expected)).toStrictEqual(expected)
      })
    }
  )
})
