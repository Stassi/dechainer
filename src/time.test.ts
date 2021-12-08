import type { Always } from './functions'
import { sleep } from './async'
import { durationTimer, now } from './time'

describe('time', () => {
  describe('now', () => {
    it('should return elapsed milliseconds since the epoch', () => {
      expect(now()).toBeGreaterThan(1638956000000)
    })
  })

  describe('durationTimer', () => {
    describe.each([0, 5])('duration: %i ms', (duration: number) => {
      it('should return the approximate elapsed time', async () => {
        const elapsed: Always<number> = durationTimer()
        await sleep(duration)
        expect(elapsed()).toBeGreaterThanOrEqual(duration)
      })
    })
  })
})
