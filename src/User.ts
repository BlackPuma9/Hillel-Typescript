import BaseModel from './BaseModel'

class User extends BaseModel {
  private readonly _id: number
  private _password: string | null = null
  private _name: string
  private _email: string

  private static currentId = 1

  constructor({ name, email }: { name: string; email: string }) {
    super()
    this._name = name
    this._email = email
    this._id = User.currentId
    User.currentId += 1
  }

  public get id(): number {
    return this._id
  }

  public set password(newPassword: string) {
    this._password = atob(newPassword)
  }

  public get name(): string {
    return this._name
  }

  public set name(newName: string) {
    this._name = newName
  }

  public get email(): string {
    return this._email
  }

  public set email(newEmail: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(newEmail)) {
      throw new Error('Invalid email. Must be a valid email address.')
    }
    this._email = newEmail
  }

  public getInfo(): string {
    return JSON.stringify({
      id: this._id,
      name: this._name,
      email: this._email,
    })
  }

  public validate(): void {
    if (this._password === null || this._password?.length < 3) {
      throw new Error('Password must be at least 3 characters long.')
    }
  }
}

export default User
