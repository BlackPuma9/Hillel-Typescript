'use strict'

import { User } from './User.js'

export class Student extends User {
  constructor(name, email, password) {
    super(name, email, password)
    this.courses = []
  }

  enroll(course) {
    this.courses.push(course)
  }
}
