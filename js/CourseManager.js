import Teacher from './Teacher.js'
import Student from './Student.js'

class CourseManager {
  #users = []
  #courses = []

  addUser(user) {
    this.#users.push(user)
  }

  addCourse(course) {
    this.#courses.push(course)
  }

  assignTeacherToCourse(courseId, teacherId) {
    const course = this.#courses.find(course => course.id === courseId)
    if (!course) {
      throw new Error('Course not found')
    }

    const teacher = this.#users.find(
      user => user.id === teacherId && user instanceof Teacher,
    )
    if (!teacher) {
      throw new Error('Teacher not found')
    }

    teacher.addSubject(course)
  }

  enrollStudentToCourse(courseId, studentId) {
    const course = this.#courses.find(course => course.id === courseId)
    if (!course) {
      throw new Error('Course not found')
    }

    const student = this.#users.find(student => student.id === studentId)
    if (!student) {
      throw new Error('Student not found')
    }

    student.enroll(course)
  }

  generateReport() {
    return {
      courses: this.#courses,
      teacher: this.#users.filter(user => user instanceof Teacher),
      student: this.#users.filter(user => user instanceof Student),
    }
  }
}

export default CourseManager
