enum OrderStatus {
  Pending = 'pending',
  Processing = 'processing',
  Shipped = 'shipped',
  Delivered = 'delivered',
  Canceled = 'canceled',
}

enum PaymentType {
  CreditCard = 'cardCard',
  PayPal = 'paypal',
  BankTransfer = 'bankTransfer',
  CashOnDelivery = 'cashOnDelivery',
}

interface Order {
  id: number
  amount: number
  status: OrderStatus
  paymentType: PaymentType
}

const order1 = {
  id: 1,
  amount: 2,
  status: OrderStatus.Processing,
  paymentType: PaymentType.CreditCard,
}
const order2 = {
  id: 2,
  amount: 5,
  status: OrderStatus.Pending,
  paymentType: PaymentType.PayPal,
}
const order3 = {
  id: 3,
  amount: 100,
  status: OrderStatus.Pending,
  paymentType: PaymentType.BankTransfer,
}

const orders: Order[] = [order1, order2, order3]

console.log(`orders`, orders)

const updateOrderStatus = (order: Order, status: OrderStatus): string => {
  order.status = status
  return `Status order was changed to ${status} for ${order.id}`
}

const updateOrder1 = updateOrderStatus(order1, OrderStatus.Shipped)
console.log(updateOrder1)

const getOrdersByStatus = (orders: Order[], status: OrderStatus): Order[] => {
  return orders.filter(obj => obj.status === status)
}

const pendingOrders = getOrdersByStatus(orders, OrderStatus.Pending)
console.log(`pendingOrders`, pendingOrders)
