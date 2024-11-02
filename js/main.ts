// Task 1
interface Address {
  street: string
  city: string
  zipCode: number
}

interface User {
  name: string
  age: number
}

interface UserWithAddress extends Address, User {
  email: string
}

const user1: UserWithAddress = {
  street: 'Kievska 33G/124',
  city: 'Zagreb',
  zipCode: 90123,
  name: 'Anna',
  age: 44,
  email: 'anna@google.com',
}
console.log(`Task1:`, user1)

// Task 2
interface Category {
  categoryName: string
  categoryId: number
}

interface Product {
  name: string
  price: number
  category: Category
}

interface Order {
  orderId: number
  userId: number
  productList: Product[]
}

type Orders = Order[]

const orders: Orders = [
  {
    orderId: 1,
    userId: 123,
    productList: [
      {
        name: 'Phone',
        price: 500,
        category: {
          categoryName: 'Electronics',
          categoryId: 1,
        },
      },
      {
        name: 'Book',
        price: 20,
        category: {
          categoryName: 'Literature',
          categoryId: 2,
        },
      },
    ],
  },
  {
    orderId: 2,
    userId: 456,
    productList: [
      {
        name: 'T-shirt',
        price: 15,
        category: {
          categoryName: 'Clothing',
          categoryId: 3,
        },
      },
    ],
  },
]

console.log(`Task2`, orders)

// Task 3
interface Person {
  firstName: string
  middleName?: string
  lastName: string
}

const getFullName = (person: Person): string => {
  return `${person.firstName} ${person.middleName ?? ''} ${person.lastName}`
}

console.log(getFullName({ lastName: 'Sheva', firstName: 'Yul' }))
console.log(
  getFullName({ lastName: 'Sheva2', firstName: 'Yul2', middleName: 'Anna' }),
)

// Task4
type Theme = 'light' | 'dark'

interface AutoSave {
  enabled: boolean
  interval: number
}

interface Settings {
  theme: Theme
  notifications: boolean
  autoSave: AutoSave
}

const applySettings = (settings: Settings): void => {
  console.log(`Selected theme: ${settings.theme}`)

  console.log(
    settings.notifications
      ? 'Notifications turned on'
      : 'Notifications turned off',
  )

  console.log(
    settings.autoSave.enabled
      ? `Autosave enabled each ${settings.autoSave.interval} seconds`
      : 'Autosave disabled',
  )
}

applySettings({
  theme: 'dark',
  notifications: true,
  autoSave: { enabled: true, interval: 60 },
})
