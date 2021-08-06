import { ceiling as ceilingFn, floor as floorFn } from './integerRounding'

type N = Parameters<typeof ceilingFn>[0]

describe('integer rounding functions', () => {
  describe.each([
    {
      ceiling: -2,
      floor: -2,
      input: -2,
    },
    {
      ceiling: -1,
      floor: -2,
      input: -1.5,
    },
    {
      ceiling: 0,
      floor: 0,
      input: 0,
    },
    {
      ceiling: 2,
      floor: 1,
      input: 1.5,
    },
    {
      ceiling: 2,
      floor: 2,
      input: 2,
    },
  ])(
    'input: $input',
    ({ ceiling, floor, input }: { ceiling: N; floor: N; input: N }) => {
      describe('ceiling', () => {
        it('should round a number up to the next largest integer', () => {
          expect(ceilingFn(input)).toStrictEqual(ceiling)
        })
      })

      describe('floor', () => {
        it('should round a number down to the next smallest integer', () => {
          expect(floorFn(input)).toStrictEqual(floor)
        })
      })
    }
  )
})
