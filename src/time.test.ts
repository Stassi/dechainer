import type { Always } from './functions'
import { sleep } from './async'
import { durationTimer, now } from './time'

describe('time', () => {
  describe('now', () => {
    it('should return elapsed milliseconds since the epoch', () => {
      expect(now()).toBeGreaterThan(1639000000000)
    })
  })

  describe('durationTimer', () => {
    describe.each([200, 400])('duration: %i ms', (duration: number) => {
      it('should return the elapsed time or greater', async () => {
        const elapsed: Always<number> = durationTimer()
        await sleep(duration)
        expect(elapsed()).toBeGreaterThanOrEqual(duration)
      })
    })
  })
})
