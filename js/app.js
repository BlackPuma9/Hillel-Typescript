'use strict'

import { Teacher } from './Teacher.js'
import { Student } from './Student.js'
import { Course } from './Course.js'
import { CourseManager } from './CourseManager.js'

const courseManager = new CourseManager()

const teacher1 = new Teacher('Teacher1', 'teacher1@gmail.com', 't1')
const teacher2 = new Teacher('Teacher2', 'teacher1@gmail.com', 't2')

const student1 = new Student('Student1', 'stud1@gmail.com', 's1')
const student2 = new Student('Student2', 'stud2@gmail.com', 's2')
const student3 = new Student('Student3', 'stud3@gmail.com', 's3')

courseManager.addUser(teacher1)
courseManager.addUser(teacher2)
courseManager.addUser(student1)
courseManager.addUser(student2)
courseManager.addUser(student3)

const course1 = new Course('Math', teacher1)
const course2 = new Course('History', teacher2)
const course3 = new Course('Physics', teacher1)

// Add courses to the system
courseManager.addCourse(course1)
courseManager.addCourse(course2)
courseManager.addCourse(course3)

// Assign teachers to courses
courseManager.assignTeacherToCourse(course1.id, teacher1.id)
courseManager.assignTeacherToCourse(course2.id, teacher2.id)
courseManager.assignTeacherToCourse(course3.id, teacher1.id)

// Enroll students to courses
courseManager.enrollStudentToCourse(course1.id, student1.id)
courseManager.enrollStudentToCourse(course1.id, student2.id)
courseManager.enrollStudentToCourse(course2.id, student2.id)
courseManager.enrollStudentToCourse(course2.id, student3.id)
courseManager.enrollStudentToCourse(course3.id, student1.id)
courseManager.enrollStudentToCourse(course3.id, student3.id)

// Generate and display the report
const report = CourseManager.generateReport()
console.log(report)
