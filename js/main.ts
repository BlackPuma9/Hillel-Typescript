interface Product {
  name: string
  price: number
  availability: boolean
}

const checkData = (data: Product): string => {
  const inStock = data.availability ? 'Yes' : 'No'
  return `Product: ${data.name}, price: ${data.price} UAH, availability: ${inStock}`
}

const product1 = { name: 'Bear', price: 200, availability: true }

console.log(checkData(product1))
