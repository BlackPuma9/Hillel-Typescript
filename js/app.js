import User from './User.js'
import Student from './Student.js'
import Teacher from './Teacher.js'
import Course from './Course.js'
import CourseManager from './CourseManager.js'

const u = new User({ name: 'John', email: 'john@gmail.com' })
u.changePassword('John1997', User.passwordStrength.MEDIUM)

const student1 = new Student({ name: 'Alice', email: 'alice@gmail.com' })
const student2 = new Student({ name: 'Anna', email: 'anna@gmail.com' })
const student3 = new Student({ name: 'Van Gogh', email: 'vania@gmail.com' })

const teacher1 = new Teacher({ name: 'Teacher1', email: 't1@gmail.com' })
const teacher2 = new Teacher({ name: 'Teacher2', email: 't2@gmail.com' })
const teacher3 = new Teacher({ name: 'Teacher3', email: 't3@gmail.com' })

const course1 = new Course({ name: 'Math', teacher: teacher1 })
const course2 = new Course({ name: 'Historia', teacher: teacher2 })
const course3 = new Course({ name: 'Physics', teacher: teacher3 })

course1.addStudent(student1)
course1.addStudent(student2)
course1.addStudent(student3)
course2.addStudent(student2)
course3.addStudent(student3)

course1.removeStudent(student2.id)

console.log(course1.listStudents())

const courseManagar = new CourseManager()
courseManagar.addCourse(course1)
courseManagar.addCourse(course2)
courseManagar.addCourse(course3)

courseManagar.addUser(teacher1)
courseManagar.addUser(teacher2)
courseManagar.addUser(teacher3)
courseManagar.addUser(student1)
courseManagar.addUser(student2)
courseManagar.addUser(student3)

courseManagar.assignTeacherToCourse(1, 5)
courseManagar.assignTeacherToCourse(2, 6)
courseManagar.assignTeacherToCourse(3, 7)

courseManagar.enrollStudentToCourse(1, 2)
courseManagar.enrollStudentToCourse(2, 3)
courseManagar.enrollStudentToCourse(3, 4)

console.log(courseManagar.generateReport())

// console.log(u)
// console.log(student1)
// console.log(student2)
// console.log(student3)
