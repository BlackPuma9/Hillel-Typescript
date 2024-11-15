# Hillel Typescript

### Step 1 — Package.json

**npm start**

### Step 2 — Package.json

**npm start-server**

## HW11. Implementation of the Data Model using Record

**Description**

Imagine that you are developing a university management system. 
You need to create a model to store information about students and their grades 
in different subjects. In this model, you will use `Record` to conveniently 
manipulate the information.

**Details**

1. Create the `Student` interface, which contains the following fields:
* `id` - unique identifier of the student (string).
* `name` - the name of the student (string).
* `age` - age of the student (number).

1. Create a `Subject` type that will represent possible subjects, for example: `Math`, `Science`, `Literature`, `History`.
2. Create a type `Grades`, which will be `Record<Subject, number>`. This will be an object where the keys will be subjects, and the values will be the student's grades for each of the subjects (values of type `number` from 0 to 100).
3. Create an interface `UniversityRecord`, which contains fields:
   * `students` - an object of type `Record<string, Student>`, where the key is the student `id`, and the value is an object of type `Student`.
   * `grades` - an object of type `Record<string, Grades>`, where the key is the student `id` and the value is an object of type `Grades`, which stores the student's grades by subject.
4. Create multiple `UniversityRecord` test records by adding several students and their grades in different subjects.
5. Write a `getStudentGrades` function that takes a `universityRecord: UniversityRecord` and `studentId: string`, and returns the student's grades by subject.
6. Write a `getAverageGrade` function that takes a `universityRecord: UniversityRecord` and `subject: Subject`, and returns the average grade of all students in the specified subject.
