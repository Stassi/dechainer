import delay from './delay'

const delayable = (duration: number) => ({
  duration,
  success: true,
})

describe('delay', () => {
  describe.each([0, 5])('duration: %i ms', (duration: number) => {
    const expected: { duration: number; success: true } = {
      duration,
      success: true,
    }

    describe('unary', () => {
      describe('input: ({ delayable, duration })', () => {
        it('should return its duration', async () => {
          expect(await delay({ delayable, duration })).toEqual(expected)
        })
      })
    })

    describe('binary', () => {
      describe('input: (delayable, duration)', () => {
        it('should return its duration', async () => {
          expect(await delay(delayable, duration)).toEqual(expected)
        })
      })

      describe('input: (duration, delayable)', () => {
        it('should return its duration', async () => {
          expect(await delay(duration, delayable)).toEqual(expected)
        })
      })
    })

    describe('curried binary', () => {
      describe('input: (delayable)(duration)', () => {
        it('should return its duration', async () => {
          expect(await delay(delayable)(duration)).toEqual(expected)
        })
      })

      describe('input: (duration)(delayable)', () => {
        it('should return its duration', async () => {
          expect(await delay(duration)(delayable)).toEqual(expected)
        })
      })
    })
  })
})
