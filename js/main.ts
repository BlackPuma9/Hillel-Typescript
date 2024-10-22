const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const calc = (arrayData: number[]): number => {
  if (arrayData.length === 0) {
    throw new Error('Array is empty')
  }

  const initialValue = 0
  const sum = arrayData.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  )
  return sum / arrayData.length
}

const res = calc(numbers)
console.log(res)
