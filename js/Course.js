'use strict'

import { Student } from './Student.js'
import { BaseModel } from './BaseModel.js'

export class Course extends BaseModel {
  static nextId = 1
  #students

  constructor(name, teacher) {
    super()
    this.id = Course.nextId++
    this.name = name
    this.teacher = teacher
    this.#students = []
  }

  addStudent(student) {
    if (student instanceof Student) {
      this.#students.push(student)
    } else {
      throw new Error('Invalid student. Must be an instance of Student class.')
    }
  }

  removeStudent(studentId) {
    this.#students = this.#students.filter(student => student.id !== studentId)
  }

  listStudents() {
    return this.#students.map(student => student.info)
  }

  validate() {
    if (!this.name || !this.teacher) {
      throw new Error('Course validation failed: name and teacher are required')
    }
  }
}
