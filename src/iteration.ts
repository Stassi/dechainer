interface Reducer<T> {
  (previousValue: T, currentValue: T, currentIndex: number, array: T[]): T
}

export function reduce<T>(reducer: Reducer<T>) {
  return (a: T[]): T => a.reduce(reducer)
}
