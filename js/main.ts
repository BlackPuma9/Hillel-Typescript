//I version

const reverseArray = (
  arr: Array<number>,
  start: number = 0,
  end: number = arr.length - 1,
): Array<number> => {
  if (start >= end) return arr

  const temp = arr[start]
  arr[start] = arr[end]
  arr[end] = temp

  return reverseArray(arr, start + 1, end - 1)
}

const arr = [1, 2, 3]
const reversedArr = reverseArray(arr)
console.log(reversedArr)
console.log(reversedArr === arr) // true

//II version

// const reverseArray = (arr: Array<number>): Array<number> => {
//   return arr.reverse()
// }
