# Hillel Typescript

### Step 1 — Package.json

**npm start**

### Step 2 — Package.json

**npm start-server**

## HW8. Checking a string for forbidden words with highlighting

Write a function highlightForbiddenWords that takes a string and an array of forbidden words. If it finds a forbidden word in the string, it wraps it in a `<del>` tag that will strike out the word.

The function should return an updated string, ready to be displayed in HTML.
Also create a simple HTML page to display the result.

**Function requirements:**

The function must take two parameters:

1. text: string - the string to be checked.
2. forbiddenWords: string[] - an array of forbidden words.

The function should return an updated string in which all found forbidden words will be wrapped in the <del> tag.

`const text = "This is a test sentence with some bad words.";`

`const forbiddenWords = ["bad", "test"];`

`const result = highlightForbiddenWords(text, forbiddenWords);`

`console.log(result); // "This is a <del>test</del> sentence with some <del>bad</del> words."`

**Task:**

1. Implement the highlightForbiddenWords function in TypeScript.
2. Add an HTML interface that allows you to enter a string and forbidden words.
3. Implement the logic to update the DOM tree to reflect the modified string with the forbidden words strikethrough.