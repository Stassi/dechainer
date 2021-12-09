import type { Always, NumberCallback } from './functions'
import { sleep } from './async'
import { add, subtract } from './math'
import { durationTimer, now } from './time'

const addFifty: NumberCallback = add(50)
const subtractFifty: NumberCallback = subtract(50)

describe('time', () => {
  describe('now', () => {
    it('should return elapsed milliseconds since the epoch', () => {
      expect(now()).toBeGreaterThan(1639000000000)
    })
  })

  describe('durationTimer', () => {
    describe.each([50, 100])('duration: %i ms', (duration: number) => {
      it('should return the elapsed time (±50 ms)', async () => {
        const lowerBound: number = subtractFifty(duration),
          upperBound: number = addFifty(duration),
          stop: Always<number> = durationTimer()

        await sleep(duration)

        const elapsed: number = stop()

        expect(elapsed).toBeGreaterThanOrEqual(lowerBound)
        expect(elapsed).toBeLessThanOrEqual(upperBound)
      })
    })
  })
})
