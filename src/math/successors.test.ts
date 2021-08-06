import { decrement, increment } from './successors'

describe('successors', () => {
  describe.each([
    {
      input: -1,
      expected: {
        next: 0,
        previous: -2,
      },
    },
    {
      input: -0.5,
      expected: {
        next: 0.5,
        previous: -1.5,
      },
    },
    {
      input: 0,
      expected: {
        next: 1,
        previous: -1,
      },
    },
    {
      input: 0.5,
      expected: {
        next: 1.5,
        previous: -0.5,
      },
    },
    {
      input: 1,
      expected: {
        next: 2,
        previous: 0,
      },
    },
  ])(
    'input: $input',
    ({
      input,
      expected: { next: expectedNext, previous: expectedPrevious },
    }: {
      input: number
      expected: {
        next: number
        previous: number
      }
    }) => {
      describe('decrement', () => {
        it('should return the previous successive integer', () => {
          expect(decrement(input)).toBe(expectedPrevious)
        })
      })

      describe('increment', () => {
        it('should return the next successive integer', () => {
          expect(increment(input)).toBe(expectedNext)
        })
      })
    }
  )
})
