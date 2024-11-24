'use strict'

import { Teacher } from './Teacher.js'
import { Student } from './Student.js'

export class CourseManager {
  constructor() {
    this.users = []
    this.courses = []
    CourseManager.instance = this
  }

  addUser(user) {
    this.users.push(user)
  }

  addCourse(course) {
    this.courses.push(course)
  }

  assignTeacherToCourse(courseId, teacherId) {
    const course = this.courses.find(course => course.id === courseId)
    const teacher = this.users.find(
      user => user.id === teacherId && user instanceof Teacher,
    )

    if (course && teacher) {
      course.teacher = teacher
    } else {
      console.log('Course or teacher not found')
    }
  }

  enrollStudentToCourse(courseId, studentId) {
    const course = this.courses.find(course => course.id === courseId)
    const student = this.users.find(
      user => user.id === studentId && user instanceof Student,
    )

    if (course && student) {
      course.addStudent(student)
      student.enroll(course)
    } else {
      console.log('Course or student not found')
    }
  }

  static generateReport() {
    const courseManager = CourseManager.instance
    const report = {
      courses: [],
      teachers: [],
      students: [],
    }

    courseManager.courses.forEach(course => {
      report.courses.push({
        id: course.id,
        name: course.name,
        teacher: course.teacher ? course.teacher.info : 'No teacher assigned',
        students: course.listStudents(),
      })
    })

    courseManager.users.forEach(user => {
      if (user instanceof Teacher) {
        report.teachers.push(user.info)
      } else if (user instanceof Student) {
        report.students.push(user.info)
      }
    })

    return report
  }
}
