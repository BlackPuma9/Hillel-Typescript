# Hillel Typescript

### Step 1 — Starting the TypeScript Project
**npm i typescript --save-dev**

It is important to include the --save-dev flag because it saves TypeScript as a development dependency. This means that TypeScript is required for the development of your project.

With TypeScript installed, you can initialize your TypeScript project by using the following command:

**npx tsc --init**

[Link](https://github.com/VladimirShaitan/TypeScript-Lessons/blob/Lesson-1/practice/tsconfig.json) to file how should be tsconfig.json set up.

### Step 2 — Compiling the TypeScript Project

You can now begin coding your TypeScript project. Open a new file named index.ts in your editor. Write the following TypeScript code in index.ts:

**let fst: (a: any, b: any) => any = (a, b) => a;**

With this TypeScript code in place, your project is ready to be compiled. Run tsc from your project’s directory:

**npx tsc**

You can activate watch mode using the following command:
**npx tsc -w**

