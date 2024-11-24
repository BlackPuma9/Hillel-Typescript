'use strict'

export class BaseModel {
  constructor() {
    if (new.target === BaseModel) {
      throw new TypeError('Cannot construct BaseModel instances directly')
    }
    this.createdAt = new Date()
  }

  validate() {
    throw new Error("Method 'validate()' must be implemented")
  }
}
