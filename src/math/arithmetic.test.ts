import divide from './divide'
import modulo from './modulo'
import remainder from './remainder'
import subtract from './subtract'
import { add, exponentiate, multiply } from './arithmetic'

describe('arithmetic', () => {
  describe.each([
    {
      x: 0,
      y: 0,
      expected: {
        difference: 0,
        modulo: NaN,
        power: 1,
        product: 0,
        quotient: NaN,
        remainder: NaN,
        sum: 0,
      },
    },
    {
      x: -1,
      y: 0,
      expected: {
        difference: 1,
        modulo: -0,
        power: 1,
        product: -0,
        quotient: -0,
        remainder: 0,
        sum: -1,
      },
    },
    {
      x: -1,
      y: -1,
      expected: {
        difference: 0,
        modulo: -0,
        power: -1,
        product: 1,
        quotient: 1,
        remainder: -0,
        sum: -2,
      },
    },
    {
      x: 1,
      y: 0,
      expected: {
        difference: -1,
        modulo: 0,
        power: 1,
        product: 0,
        quotient: 0,
        remainder: 0,
        sum: 1,
      },
    },
    {
      x: 0,
      y: 1,
      expected: {
        difference: 1,
        modulo: NaN,
        power: 0,
        product: 0,
        quotient: Infinity,
        remainder: NaN,
        sum: 1,
      },
    },
    {
      x: 0.5,
      y: 0.5,
      expected: {
        difference: 0,
        modulo: 0,
        power: 0.7071067811865476,
        product: 0.25,
        quotient: 1,
        remainder: 0,
        sum: 1,
      },
    },
    {
      x: 1,
      y: 1,
      expected: {
        difference: 0,
        modulo: 0,
        power: 1,
        product: 1,
        quotient: 1,
        remainder: 0,
        sum: 2,
      },
    },
    {
      x: 2,
      y: 3,
      expected: {
        difference: 1,
        modulo: 1,
        power: 8,
        product: 6,
        quotient: 1.5,
        remainder: 1,
        sum: 5,
      },
    },
    {
      x: 3,
      y: 2,
      expected: {
        difference: -1,
        modulo: 2,
        power: 9,
        product: 6,
        quotient: 0.6666666666666666,
        remainder: 2,
        sum: 5,
      },
    },
  ])(
    'input: (x: $x, y: $y)',
    ({
      x,
      y,
      expected: {
        difference: expectedDifference,
        modulo: expectedModulo,
        power: expectedPower,
        product: expectedProduct,
        quotient: expectedQuotient,
        remainder: expectedRemainder,
        sum: expectedSum,
      },
    }: {
      x: number
      y: number
      expected: Record<
        | 'difference'
        | 'modulo'
        | 'power'
        | 'product'
        | 'quotient'
        | 'remainder'
        | 'sum',
        number
      >
    }) => {
      describe('hyperoperations (0, 3]', () => {
        describe('add', () => {
          it('should return the sum of two numbers', () => {
            expect(add(x)(y)).toBe(expectedSum)
            expect(add(x, y)).toBe(expectedSum)
            expect(add(x, y, 0)).toBe(expectedSum)
          })
        })

        describe('multiply', () => {
          it('should return the product of two numbers', () => {
            expect(multiply(x)(y)).toBe(expectedProduct)
            expect(multiply(x, y)).toBe(expectedProduct)
            expect(multiply(x, y, 1)).toBe(expectedProduct)
          })
        })

        describe('exponentiate', () => {
          it('should return the base raised to the power of the exponent', () => {
            expect(exponentiate(x)(y)).toBe(expectedPower)
            expect(exponentiate(x, y)).toBe(expectedPower)
            expect(exponentiate(x, y, 1)).toBe(expectedPower)
          })
        })
      })

      describe('inverse operations', () => {
        describe('subtract', () => {
          it('should return the difference between two numbers', () => {
            expect(subtract(x)(y)).toBe(expectedDifference)
            expect(subtract(x, y)).toBe(expectedDifference)
          })
        })

        describe('divide', () => {
          it('should return the quotient of two numbers', () => {
            expect(divide(x)(y)).toStrictEqual(expectedQuotient)
            expect(divide(x, y)).toStrictEqual(expectedQuotient)
          })
        })

        describe('remainder', () => {
          it('should return the remainder of two numbers', () => {
            expect(remainder(x)(y)).toBe(expectedRemainder)
            expect(remainder(x, y)).toBe(expectedRemainder)
          })
        })

        describe('modulo', () => {
          it('should return the modulo of two numbers', () => {
            expect(modulo(x)(y)).toBe(expectedModulo)
            expect(modulo(x, y)).toBe(expectedModulo)
          })
        })
      })
    }
  )
})
