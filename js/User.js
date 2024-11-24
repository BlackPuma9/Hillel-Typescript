'use strict'

import { BaseModel } from './BaseModel.js'

export class User extends BaseModel {
  #password
  static nextId = 1
  constructor(name, email, password) {
    super()
    this.id = User.nextId++
    this.name = name
    this.setEmail(email)
    this.#password = password
  }

  get info() {
    return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`
  }

  changePassword(newPassword) {
    this.#password = newPassword
  }

  setEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailRegex.test(email)) {
      this.email = email
    } else {
      throw new Error('Invalid email address')
    }
  }

  validate() {
    if (!this.name || !this.email || !this.#password) {
      throw new Error(
        'User validation failed: name, email, and password are required',
      )
    }
  }
}
