type ArrayOrString = any[] | string

export default function length(x: ArrayOrString): number {
  return x.length
}
