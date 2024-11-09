# Hillel Typescript

### Step 1 — Package.json

**npm start**

### Step 2 — Package.json

**npm start-server**

## HW10. Generics

Write a `filterByProperty` function that takes an array of objects and a property name and returns a new array of objects that have this property. The property type must match the type passed in the parameter due to generics.

**Conditions:**

1. The function must be of the following type:

`function filterByProperty<T, K extends keyof T>(array: T[], property: K, value: T[K]): T[]`

**T** is the type of objects in the array.

**K** - the name of the property that must be present in the objects of the array.

**value** - the value that this property must have in order for the object to be included in the resulting array.

Example of use

`type User = {
id: number;
name: string;
age: number;
isActive: boolean;
};`

`const users: User[] = [
{ id: 1, name: 'Alice', age: 25, isActive: true },
{ id: 2, name: 'Bob', age: 30, isActive: false },
{ id: 3, name: 'Charlie', age: 35, isActive: true },
];
`

How to use the function

`const activeUsers = filterByProperty(users, 'isActive', true);
console.log(activeUsers);
// Результат: [
//   { id: 1, name: 'Alice', age: 25, isActive: true },
//   { id: 3, name: 'Charlie', age: 35, isActive: true }
// ]`

**Explanation**

- The `filterByProperty` function uses the generics `T` and `K`.
- T - the type of elements in the array.
- `K extends keyof T` - allows you to use only those keys that are in the type `T`.
- `T[K]` - the type of value that we compare with the passed `value`.
  
**How it works**

- The `filterByProperty` function checks each object in the array to determine if the `property` property has a value equal to `value`.
- The result is a new array containing only objects that meet the conditions.

