# Hillel Typescript

### Step 1 — Package.json

**npm start**

### Step 2 — Package.json

**npm start-server**

## HW13. Users (TypeScript)

**Description**

### **Step 1. Basic clas `User`**

Create a `User` class that has:

* Properties:
    * `id` (unique identifier, automatically generated for each instance);
    * `name` (name);
    * `email` (e-mail);
    * private property `password`.
* Methods:
    * `changePassword(newPassword)` - changes the password.
    * Getter `info` - returns a string: `“ID: [id], Name: [name], Email: [email]”`.

Additionally:
* Use the static property to automatically generate the id

### **Step 2. Inheritance**

Create `Student` and `Teacher` classes that inherit from the `User` class.

1. `Student` class:
* New properties:
    * `courses` (array, empty by default).
* New methods:
    * `enroll(course`) - adds a course to the student's list.

1. Class Teacher:
* New properties:
    * `subjects` (an array of subjects that the teacher teaches).
* New methods:
    * `addSubject(subject)` - adds a subject to the teacher's list.

### **Step 3. Class Course**

Create a Course class that contains:

* Properties:
    * `id` (unique identifier, generated automatically).
    * `name` (the name of the course).
    * `teacher` (an object of the Teacher class that teaches the course).
    * private property `students` (an array of students enrolled in the course).
* Methods:
    * `addStudent(student)` - adds a student to the course.
    * `removeStudent(studentId)` - removes a student from the course by his id.
    * `listStudents()` - returns a list of students in the course.

### **Step 4: System manager**

Create a `CourseManager` class that manages the entire system:

* Properties:
    * Arrays: `users`, `courses`.
* Methods:
    * `addUser(user)` - adds a user (teacher or student) to the system.
    * `addCourse(course)` - adds a course to the system.
    * `assignTeacherToCourse(courseId, teacherId)` - assigns a teacher to a course.
    * `enrollStudentToCourse(courseId, studentId)` - enrolls a student in the course.

### **Step 5: Using static methods**
* Add a static method to the `CourseManager` class:
    * `generateReport()` - returns a report on all courses, teachers, and students in the system.

### **Step 6: Validate with setters**
* In the `User` and `Course` classes, add data validation sets:
    * For `emails` in the `User` class, check that they are valid emails.
    * For `students` in the `Course` class, check that they are instances of the `Student` class.

### **Step 7: Abstract class**
Add an abstract `BaseModel` class that contains:

* Abstract method `validate()` - must be implemented in all child classes (`User`, `Course`).
* The `createdAt` property - the date of creation of the instance (current by default).

### Testing

1. Create multiple users (students and teachers).
2. Create several courses.
3. Enroll students in the courses and assign teachers.
4. Call the `generateReport()` method to display a full report about the system.
