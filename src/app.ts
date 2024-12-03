import Student from './Student'
import Teacher from './Teacher'
import Course from './Course'
import CourseManager from './CourseManager'

const student1 = new Student({ name: 'Alice', email: 'alice@gmail.com' })
const student2 = new Student({ name: 'Anna', email: 'anna@gmail.com' })
const student3 = new Student({ name: 'Van Gogh', email: 'vania@gmail.com' })

const teacher1 = new Teacher({ name: 'Teacher1', email: 't1@gmail.com' })
const teacher2 = new Teacher({ name: 'Teacher2', email: 't2@gmail.com' })
const teacher3 = new Teacher({ name: 'Teacher3', email: 't3@gmail.com' })

const course1 = new Course({ name: 'Math', teacher: teacher1 })
const course2 = new Course({ name: 'History', teacher: teacher2 })
const course3 = new Course({ name: 'Physics', teacher: teacher3 })

course1.addStudent(student1)
course1.addStudent(student2)
course1.addStudent(student3)
course2.addStudent(student2)
course3.addStudent(student3)

course1.removeStudent(student2.id)

console.log(course1.listStudents())

const courseManager = new CourseManager()
courseManager.addCourse(course1)
courseManager.addCourse(course2)
courseManager.addCourse(course3)

courseManager.addUser(teacher1)
courseManager.addUser(teacher2)
courseManager.addUser(teacher3)
courseManager.addUser(student1)
courseManager.addUser(student2)
courseManager.addUser(student3)

courseManager.assignTeacherToCourse(1, 4)
courseManager.assignTeacherToCourse(2, 5)
courseManager.assignTeacherToCourse(3, 6)

courseManager.enrollStudentToCourse(1, 1)
courseManager.enrollStudentToCourse(2, 2)
courseManager.enrollStudentToCourse(3, 3)

console.log(courseManager.generateReport())

// console.log(u)
// console.log(student1)
// console.log(student2)
// console.log(student3)
