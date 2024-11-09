type User = {
  id: number
  name: string
  age: number
  isActive: boolean
}

const users: User[] = [
  { id: 1, name: 'Alice', age: 25, isActive: true },
  { id: 2, name: 'Bob', age: 30, isActive: false },
  { id: 3, name: 'Charlie', age: 35, isActive: true },
]

function filterByProperty<T, K extends keyof T>(
  array: T[],
  property: K,
  value: T[K],
): T[] {
  const result: T[] = []

  // 1st Option
  for (const element of array) {
    if (element[property] === value) {
      result.push(element)
    }
  }
  // 2nd Option
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i][property] === value) {
  //     result.push(array[i])
  //   }
  // }
  return result
}

const activeUsers = filterByProperty(users, 'isActive', true)
console.log(activeUsers)
// Результат: [
//   { id: 1, name: 'Alice', age: 25, isActive: true },
//   { id: 3, name: 'Charlie', age: 35, isActive: true }
// ]
