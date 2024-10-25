function deepCopy<T>(src: T): T {
  const target: any = Array.isArray(src) ? [] : {}
  for (const prop in src) {
    const value = src[prop]
    if (value && typeof value === 'object') {
      target[prop] = deepCopy(value)
    } else {
      target[prop] = value
    }
  }
  return target as T
}

const original = { a: 1, b: { c: 2 }, d: [3, 4] }
const copy = deepCopy(original)
console.log(copy)

console.log(original !== copy) // true
console.log(original.b !== copy.b) // true
console.log(original.d !== copy.d) // true
