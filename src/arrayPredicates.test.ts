import type { Predicate } from './functions'
import { every, some } from './arrayPredicates'
import { isEven, isOdd } from './parityPredicates'

describe('array predicates', () => {
  describe.each([
    {
      input: [1, 2, 3],
      expected: {
        every: {
          even: false,
          odd: false,
        },
        some: {
          even: true,
          odd: true,
        },
      },
    },
    {
      input: [1, 3, 5],
      expected: {
        every: {
          even: false,
          odd: true,
        },
        some: {
          even: false,
          odd: true,
        },
      },
    },
    {
      input: [2, 4, 8],
      expected: {
        every: {
          even: true,
          odd: false,
        },
        some: {
          even: true,
          odd: false,
        },
      },
    },
  ])(
    '$input',
    ({
      expected,
      input,
    }: {
      expected: Record<'every' | 'some', Record<'even' | 'odd', boolean>>
      input: number[]
    }) => {
      describe.each([
        {
          name: 'every',
          predicate: every,
        },
        {
          name: 'some',
          predicate: some,
        },
      ])(
        '$name',
        ({
          name: arrayPredicateName,
          predicate: arrayPredicate,
        }: {
          name: string
          predicate: any
        }) => {
          describe.each([
            {
              name: 'even',
              predicate: isEven,
            },
            {
              name: 'odd',
              predicate: isOdd,
            },
          ])(
            '$name',
            ({
              name: parityName,
              predicate: parityPredicate,
            }: {
              name: string
              predicate: Predicate<number> | Predicate<number[]>
            }) => {
              const expectedParity: boolean =
                expected[<keyof typeof expected>arrayPredicateName][
                  <keyof typeof expected.some>parityName
                ]

              it(`should be ${expectedParity}`, () => {
                expect(arrayPredicate(parityPredicate)(input)).toBe(
                  expectedParity
                )
                expect(arrayPredicate(parityPredicate, input)).toBe(
                  expectedParity
                )
              })
            }
          )
        }
      )
    }
  )
})
