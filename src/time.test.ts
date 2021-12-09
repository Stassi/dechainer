import type { Always, NumberCallback } from './functions'
import { sleep } from './async'
import { add, subtract } from './math'
import { durationTimer, now } from './time'

const addTwoHundred: NumberCallback = add(200)
const subtractTwoHundred: NumberCallback = subtract(200)

describe('time', () => {
  describe('now', () => {
    it('should return elapsed milliseconds since the epoch', () => {
      expect(now()).toBeGreaterThan(1639000000000)
    })
  })

  describe('durationTimer', () => {
    describe.each([200, 400])('duration: %i ms', (duration: number) => {
      it('should return the elapsed time (±100 ms)', async () => {
        const lowerBound: number = subtractTwoHundred(duration),
          upperBound: number = addTwoHundred(duration),
          stop: Always<number> = durationTimer()

        await sleep(duration)

        const elapsed: number = stop()

        expect(elapsed).toBeGreaterThanOrEqual(lowerBound)
        expect(elapsed).toBeLessThanOrEqual(upperBound)
      })
    })
  })
})
