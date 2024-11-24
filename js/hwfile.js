'use strict'

class User {
  #password
  static nextId = 1
  constructor(name, email, password) {
    this.id = User.nextId++
    this.name = name
    this.email = email
    this.#password = password
  }

  get info() {
    return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`
  }

  changePassword(newPassword) {
    this.#password = newPassword
  }
}

class Student extends User {
  constructor(name, email, password) {
    super(name, email, password)
    this.course = []
  }

  enroll(course) {
    this.course.push(course)
  }
}

class Teacher extends User {
  constructor(name, email, password) {
    super(name, email, password)
    this.subjects = []
  }
  addSubject(subject) {
    this.subjects.push(subject)
  }
}

class Course {
  static nextId = 1
  #students

  constructor(name, teacher) {
    this.id = Course.nextId++
    this.name = name
    this.teacher = teacher
    this.#students = []
  }

  addStudent(student) {
    this.#students.push(student)
  }

  removeStudent(studentId) {
    this.#students = this.#students.filter(student => student.id !== studentId)
  }

  listStudents() {
    return this.#students.map(student => student.info)
  }
}
