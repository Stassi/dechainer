import { atIndex, head } from './arrayAccessors'

describe('array accessors', () => {
  describe.each([
    {
      expected: {
        head: 0,
        neck: 1,
      },
      input: [0, 1, 2],
    },
    {
      expected: {
        head: 'a',
        neck: 'b',
      },
      input: ['a', 'b', 'c'],
    },
  ])(
    '$input',
    ({
      expected,
      input,
    }: {
      expected: Record<'head' | 'neck', number | string>
      input: (number | string)[]
    }) => {
      describe.each([
        {
          accessor: head,
          name: 'head',
        },
        {
          accessor: atIndex(1),
          name: 'neck',
        },
      ])(
        '$name',
        ({
          accessor,
          name,
        }: {
          accessor: (<T>(a: T[]) => T) | ((x: unknown[]) => unknown)
          name: string
        }) => {
          const expectedElement: number | string =
            expected[<keyof typeof expected>name]

          it(`should return an element at a given index: ${expectedElement}`, () => {
            expect(accessor(input)).toBe(expectedElement)
          })
        }
      )
    }
  )
})
