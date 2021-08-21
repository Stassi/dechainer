import { isEven, isOdd } from './parityPredicates'
import { Predicate } from './functions'

describe('parity predicates', () => {
  describe.each([
    {
      input: -2,
      expected: {
        even: true,
        odd: false,
      },
    },
    {
      input: -1,
      expected: {
        even: false,
        odd: true,
      },
    },
    {
      input: -0,
      expected: {
        even: true,
        odd: false,
      },
    },
    {
      input: 0,
      expected: {
        even: true,
        odd: false,
      },
    },
    {
      input: 1,
      expected: {
        even: false,
        odd: true,
      },
    },
    {
      input: 2,
      expected: {
        even: true,
        odd: false,
      },
    },
  ])(
    '$input',
    ({
      expected,
      input,
    }: {
      expected: Record<'even' | 'odd', boolean>
      input: number
    }) => {
      describe.each([
        { predicate: isEven, name: 'even' },
        { predicate: isOdd, name: 'odd' },
      ])(
        '$name',
        ({
          predicate,
          name,
        }: {
          predicate: Predicate<number>
          name: string
        }) => {
          const expectedResult: boolean = expected[<keyof typeof expected>name]

          it(`should be ${expectedResult}`, () => {
            expect(predicate(input)).toBe(expectedResult)
          })
        }
      )
    }
  )
})
