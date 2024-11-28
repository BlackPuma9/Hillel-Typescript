import BaseModel from './BaseModel.js'

class User extends BaseModel {
  static #currentId = 1

  static passwordStrength = Object.freeze({
    WEAK: 'weak',
    MEDIUM: 'medium',
    STRONG: 'strong',
  })

  static passwordValidations = {
    [User.passwordStrength.WEAK]: value => {
      // add regexp
      return true
    },
    [User.passwordStrength.MEDIUM]: value => {
      // add regexp
      return true
    },
    [User.passwordStrength.STRONG]: value => {
      // add regexp
      return true
    },
  }

  constructor({ name, email }) {
    super()
    this.name = name
    this.email = email
    this.#id = User.#currentId
    User.#currentId += 1
  }

  #id = 0
  #pass = null

  name = null
  email = null

  get id() {
    return this.#id
  }

  get info() {
    return JSON.stringify({
      name: this.name,
      id: this.id,
      email: this.email,
    })
  }
  set #password(newPassword) {
    this.#pass = atob(newPassword)
  }

  set email(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      throw new Error('Invalid email. Must be a valid email address.')
    }
    this.email = email
  }

  changePassword(newPassword, strength = User.passwordStrength.WEAK) {
    if (typeof newPassword !== 'string') return

    if (!Object.values(User.passwordStrength).includes(strength)) {
      throw new Error('Pass strength in wrong')
    }

    if (!User.passwordValidations[strength](newPassword)) {
      throw new Error('Password is too weak for ' + strength)
    }

    this.#password = newPassword
  }

  validate() {
    if (this.#password < 3) {
      throw new Error('Password must be at least 3 characters long.')
    }
  }
}
export default User
