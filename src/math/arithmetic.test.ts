import { add, multiply } from './arithmetic'

describe('arithmetic', () => {
  describe.each([
    {
      expected: {
        product: 0,
        sum: 0,
      },
      x: 0,
      y: 0,
    },
    {
      expected: {
        product: -0,
        sum: -1,
      },
      x: -1,
      y: 0,
    },
    {
      expected: {
        product: 1,
        sum: -2,
      },
      x: -1,
      y: -1,
    },
    {
      expected: {
        product: 0,
        sum: 1,
      },
      x: 1,
      y: 0,
    },
    {
      expected: {
        product: 0,
        sum: 1,
      },
      x: 0,
      y: 1,
    },
    {
      expected: {
        product: 0.25,
        sum: 1,
      },
      x: 0.5,
      y: 0.5,
    },
    {
      expected: {
        product: 1,
        sum: 2,
      },
      x: 1,
      y: 1,
    },
  ])(
    'input: (x: $x, y: $y)',
    ({
      expected: { product: expectedProduct, sum: expectedSum },
      x,
      y,
    }: {
      expected: { product: number; sum: number }
      x: number
      y: number
    }) => {
      describe('add', () => {
        it('should return the sum of two numbers', () => {
          expect(add(x)(y)).toBe(expectedSum)
          expect(add(x, y)).toBe(expectedSum)
        })
      })

      describe('multiply', () => {
        it('should return the product of two numbers', () => {
          expect(multiply(x)(y)).toBe(expectedProduct)
          expect(multiply(x, y)).toBe(expectedProduct)
        })
      })
    }
  )
})
