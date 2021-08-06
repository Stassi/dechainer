interface MathGlobalIntegers {
  ceil: typeof Math.ceil
  floor: typeof Math.floor
}

export const { floor, ceil: ceiling }: MathGlobalIntegers = Math
