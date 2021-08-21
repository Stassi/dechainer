import type { Predicate } from '../functions'
import { every, some } from './arrays'
import { isEven, isOdd } from './parities'
import { isNumber, isString } from './types'

describe('predicates', () => {
  describe('arrays', () => {
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

  describe('parities', () => {
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
            const expectedResult: boolean =
              expected[<keyof typeof expected>name]

            it(`should be ${expectedResult}`, () => {
              expect(predicate(input)).toBe(expectedResult)
            })
          }
        )
      }
    )
  })

  describe('types', () => {
    describe.each([
      {
        input: null,
        expected: {
          number: false,
          string: false,
        },
      },
      {
        input: undefined,
        expected: {
          number: false,
          string: false,
        },
      },
      {
        input: NaN,
        expected: {
          number: true,
          string: false,
        },
      },
      {
        input: 1,
        expected: {
          number: true,
          string: false,
        },
      },
      {
        input: Infinity,
        expected: {
          number: true,
          string: false,
        },
      },
      {
        input: 'a',
        expected: {
          number: false,
          string: true,
        },
      },
    ])(
      'input: $input',
      ({
        input,
        expected: { number: expectedNumber, string: expectedString },
      }: {
        input: unknown
        expected: {
          number: boolean
          string: boolean
        }
      }) => {
        describe('isNumber', () => {
          it('should return true if the parameter is a number', () => {
            expect(isNumber(input)).toBe(expectedNumber)
          })
        })

        describe('isString', () => {
          it('should return true if the parameter is a string', () => {
            expect(isString(input)).toBe(expectedString)
          })
        })
      }
    )
  })
})
