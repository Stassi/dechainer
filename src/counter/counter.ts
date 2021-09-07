import type { CounterImpersistent } from './counterImpersistent'
import type { CounterPersistent } from './counterPersistent'
import counterImpersistent from './counterImpersistent'
import counterPersistent from './counterPersistent'

type CounterParam<Impersistent extends boolean> = {
  impersistent: Impersistent
  initialState?: number
}

type Counter<Impersistent extends boolean> = Impersistent extends true
  ? CounterImpersistent
  : CounterPersistent

export default function counter(x: CounterParam<true>): Counter<true>
export default function counter(x: CounterParam<false>): Counter<false>
export default function counter({
  impersistent,
  initialState = 0,
}: CounterParam<boolean>): CounterImpersistent | CounterPersistent {
  return impersistent
    ? counterImpersistent(initialState)
    : counterPersistent(initialState)
}
