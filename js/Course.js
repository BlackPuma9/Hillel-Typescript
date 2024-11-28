import Student from './Student.js'
import BaseModel from './BaseModel.js'

class Course extends BaseModel {
  static isCourse(obj) {
    return obj instanceof Course
  }

  static #currentId = 1

  #id = 0
  name = null
  teacher = null
  #students = []

  constructor({ name, teacher }) {
    super()
    this.name = name
    this.teacher = teacher
    this.#id = Course.#currentId
    Course.#currentId += 1
  }

  get id() {
    return this.#id
  }

  addStudent(student) {
    if (!(student instanceof Student)) {
      throw new Error('Invalid student. Must be an instance of Student class.')
    }
    const result = this.#students.find(s => s.id === student.id)
    if (!result) {
      this.#students.push(student)
    }
  }

  removeStudent(studentId) {
    this.#students = this.#students.filter(student => student.id !== studentId)
  }

  listStudents() {
    return Object.freeze(this.#students)
  }

  validate() {
    if (!this.teacher) {
      throw new Error('Teacher must be not empty.')
    }
  }
}

export default Course
