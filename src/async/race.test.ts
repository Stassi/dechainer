import type { NumberCallback } from '../functions'
import delay from './delay'
import race from './race'
import { add, subtract } from '../math'

type Duration = { duration: number }

const addTen: NumberCallback = add(10),
  subtractTen: NumberCallback = subtract(10),
  delayedSuccess: (duration: number) => Promise<Duration> = delay(
    (duration: number) => ({
      duration,
    })
  )

describe('race', () => {
  describe.each([10, 20])('timeout: %i ms', (timeout: number) => {
    const faster: number = subtractTen(timeout),
      slower: number = addTen(timeout),
      expectedResolution: Duration = {
        duration: faster,
      },
      expectedRangeError: RangeError = new RangeError(
        `Timeout after ${timeout} ms`
      )

    describe('unary', () => {
      describe('input: ({ contender, timeout })', () => {
        describe('resolution before timeout', () => {
          it('should return the awaited value', async () => {
            expect(
              await race({
                timeout,
                contender: delayedSuccess(faster),
              })
            ).toEqual(expectedResolution)
          })
        })

        describe('rejection after timeout', () => {
          it('should throw a RangeError', async () => {
            await expect(() =>
              race({
                timeout,
                contender: delayedSuccess(slower),
              })
            ).rejects.toThrow(expectedRangeError)
          })
        })
      })
    })

    describe('binary', () => {
      describe('input: (contender, timeout)', () => {
        describe('resolve before timeout', () => {
          it('should return the awaited value', async () => {
            expect(await race(delayedSuccess(faster), timeout)).toEqual(
              expectedResolution
            )
          })
        })

        describe('resolve after timeout', () => {
          it('should throw a RangeError', async () => {
            await expect(() =>
              race(delayedSuccess(slower), timeout)
            ).rejects.toThrow(expectedRangeError)
          })
        })
      })

      describe('input: (timeout, contender)', () => {
        describe('resolve before timeout', () => {
          it('should return the awaited value', async () => {
            expect(await race(timeout, delayedSuccess(faster))).toEqual(
              expectedResolution
            )
          })
        })

        describe('resolve after timeout', () => {
          it('should throw a RangeError', async () => {
            await expect(() =>
              race(timeout, delayedSuccess(slower))
            ).rejects.toThrow(expectedRangeError)
          })
        })
      })
    })

    describe('curried binary', () => {
      describe('input: (contender)(timeout)', () => {
        describe('resolve before timeout', () => {
          it('should return the awaited value', async () => {
            expect(await race(delayedSuccess(faster))(timeout)).toEqual(
              expectedResolution
            )
          })
        })

        describe('resolve after timeout', () => {
          it('should throw a RangeError', async () => {
            await expect(() =>
              race(delayedSuccess(slower))(timeout)
            ).rejects.toThrow(expectedRangeError)
          })
        })
      })

      describe('input: (timeout)(contender)', () => {
        describe('resolve before timeout', () => {
          it('should return the awaited value', async () => {
            expect(await race(timeout)(delayedSuccess(faster))).toEqual(
              expectedResolution
            )
          })
        })

        describe('resolve after timeout', () => {
          it('should throw a RangeError', async () => {
            await expect(() =>
              race(timeout)(delayedSuccess(slower))
            ).rejects.toThrow(expectedRangeError)
          })
        })
      })
    })
  })
})
