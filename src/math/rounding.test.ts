import { ceiling, floor } from './rounding'

describe('rounding', () => {
  describe.each([
    {
      input: -2,
      expected: {
        ceiling: -2,
        floor: -2,
      },
    },
    {
      input: -1.5,
      expected: {
        ceiling: -1,
        floor: -2,
      },
    },
    {
      input: 0,
      expected: {
        ceiling: 0,
        floor: 0,
      },
    },
    {
      input: 1.5,
      expected: {
        ceiling: 2,
        floor: 1,
      },
    },
    {
      input: 2,
      expected: {
        ceiling: 2,
        floor: 2,
      },
    },
  ])(
    'input: $input',
    ({
      input,
      expected: { ceiling: expectedCeiling, floor: expectedFloor },
    }: {
      input: number
      expected: {
        ceiling: number
        floor: number
      }
    }) => {
      describe('ceiling', () => {
        it('should round a number up to the next largest integer', () => {
          expect(ceiling(input)).toBe(expectedCeiling)
        })
      })

      describe('floor', () => {
        it('should round a number down to the next smallest integer', () => {
          expect(floor(input)).toBe(expectedFloor)
        })
      })
    }
  )
})
