# Hillel Typescript

### Step 1 — Package.json

**npm start**

### Step 2 — Package.json

**npm start-server**

## HW9. Types && Interfaces

**Task 1. Extension and merging interfaces**
1. Create two interfaces `Address` with the properties `street`, `city`, `zipCode` and `User` with the properties `name` and `age`
2. Create a third interface, `UserWithAddress`, that combines `User` and `Address`.
3. Add an `email` property to this new interface and test it

**Task 2. Creating types with nested interfaces**
1. Write the `Product` interface with the following fields: `name` (string), `price` (number), `category` (an object containing `categoryName` and `categoryId`).
2. Add an `Order` interface that contains `orderId`, `userId`, and a list of productList (`Product` array).
3. Create a type for this array of such orders and model several examples.

**Task 3. Optional properties**
1. Create a `Person` interface that contains the required property `firstName`, `lastName` and the optional field `middleName`.
2. Write a function that accepts type object `Person` as a parameter and returns a string containing the full name, if middleName exists.

**Task 4. Create an interface to read the settings**
1. Describe the `Settings` interface, which contains properties for configuring the program:
   1. `theme`:a string (can be “light” or “dark”).
   2. `notifications`: a boolean value.
   3. `autoSave`: an object with property `enabled` (boolean value) and `interval` (number).
   
2. Write an `applySettings` function that accepts an object type `Settings` and performs actions depending on the settings values (for example, displays a message about enabling/disabling notifications).