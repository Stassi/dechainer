import type { CounterImpersistent } from './counterImpersistent'
import type { CounterPersistent } from './counterPersistent'
import counterImpersistent from './counterImpersistent'
import counterPersistent from './counterPersistent'

describe('counter', () => {
  describe('persistent', () => {
    const {
      decrement: decrementCounter,
      increment: incrementCounter,
    }: CounterPersistent = counterPersistent()

    describe('increment', () => {
      it('should increment the counter by 1', () => {
        expect(incrementCounter().state).toBe(1)
      })
    })

    describe('decrement', () => {
      it('should decrement the counter by 1', () => {
        expect(decrementCounter().state).toBe(-1)
      })
    })
  })

  describe('impersistent', () => {
    const { count, decrement, increment, reset }: CounterImpersistent =
      counterImpersistent()

    beforeEach(reset)

    describe('increment', () => {
      it('should increment the counter by 1', () => {
        increment()
        expect(count()).toBe(1)
      })
    })

    describe('decrement', () => {
      it('should decrement the counter by 1', () => {
        decrement()
        expect(count()).toBe(-1)
      })
    })
  })
})
