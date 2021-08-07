import { add, divide, multiply, subtract } from './arithmetic'

describe('arithmetic', () => {
  describe.each([
    {
      x: 0,
      y: 0,
      expected: {
        difference: 0,
        product: 0,
        quotient: NaN,
        sum: 0,
      },
    },
    {
      x: -1,
      y: 0,
      expected: {
        difference: 1,
        product: -0,
        quotient: -0,
        sum: -1,
      },
    },
    {
      x: -1,
      y: -1,
      expected: {
        difference: 0,
        product: 1,
        quotient: 1,
        sum: -2,
      },
    },
    {
      x: 1,
      y: 0,
      expected: {
        difference: -1,
        product: 0,
        quotient: 0,
        sum: 1,
      },
    },
    {
      x: 0,
      y: 1,
      expected: {
        difference: 1,
        product: 0,
        quotient: Infinity,
        sum: 1,
      },
    },
    {
      x: 0.5,
      y: 0.5,
      expected: {
        difference: 0,
        product: 0.25,
        quotient: 1,
        sum: 1,
      },
    },
    {
      x: 1,
      y: 1,
      expected: {
        difference: 0,
        product: 1,
        quotient: 1,
        sum: 2,
      },
    },
  ])(
    'input: (x: $x, y: $y)',
    ({
      x,
      y,
      expected: {
        difference: expectedDifference,
        product: expectedProduct,
        quotient: expectedQuotient,
        sum: expectedSum,
      },
    }: {
      x: number
      y: number
      expected: {
        difference: number
        product: number
        quotient: number
        sum: number
      }
    }) => {
      describe('add', () => {
        it('should return the sum of two numbers', () => {
          expect(add(x)(y)).toBe(expectedSum)
          expect(add(x, y)).toBe(expectedSum)
        })
      })

      describe('subtract', () => {
        it('should return the difference between two numbers', () => {
          expect(subtract(x)(y)).toBe(expectedDifference)
          expect(subtract(x, y)).toBe(expectedDifference)
        })
      })

      describe('multiply', () => {
        it('should return the product of two numbers', () => {
          expect(multiply(x)(y)).toBe(expectedProduct)
          expect(multiply(x, y)).toBe(expectedProduct)
        })
      })

      describe('divide', () => {
        it('should return the quotient of two numbers', () => {
          expect(divide(x)(y)).toStrictEqual(expectedQuotient)
          expect(divide(x, y)).toStrictEqual(expectedQuotient)
        })
      })
    }
  )
})
