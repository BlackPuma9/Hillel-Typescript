'use strict'

import { User } from './User.js'

export class Teacher extends User {
  constructor(name, email, password) {
    super(name, email, password)
    this.subjects = []
  }

  addSubject(subject) {
    this.subjects.push(subject)
  }
}
