# Hillel Typescript

### Step 1 — Package.json

**npm start**

### Step 2 — Package.json

**npm start-server**

## HW12. Managing Orders Using enum

**Description**

Let's imagine that you are creating a system for managing orders in an online store. In this system, you need to use `enums` to represent different order statuses and payment types.

**Details**

1. Create an `enum` `OrderStatus` that will represent the possible order statuses:
* `Pending` - the order is waiting for confirmation.
* `Processing` - the order is being processed.
* `Shipped` - the order has been sent.
* `Delivered` - the order has been delivered.
* `Canceled` - the order is canceled.
1. Create an `enum` `PaymentType` that will represent the types of payment:
* `CreditCard` - payment by credit card.
* `PayPal` - payment via PayPal.
* `BankTransfer` - payment by bank transfer.
* `CashOnDelivery` - payment upon delivery.
1. Create an `Order` interface that contains fields:
* `id` - a unique identifier of the order (of type string).
* `amount` - the total amount of the order (of type number).
* `status` - the status of the order (of type OrderStatus).
* `paymentType` - type of payment (of type PaymentType).
1. Create several orders to test the system using `OrderStatus` and `PaymentType`.
2. Write an `updateOrderStatus` function that accepts an `order: Order` and `status: OrderStatus`, updates the status of the order, and displays a message in the console about the status change.
3. Write a `getOrdersByStatus` function that takes an array of `orders: Order[]` and `status: OrderStatus`, and returns all orders with the corresponding status.