class User {
  private id: number = 0
  private password: string | null = null
  name: string | null = null
  email: string | null = null

  private static currentId = 1

  constructor({ name, email }: { name: string; email: string }) {
    this.name = name
    this.email = email
    this.id = User.currentId
    User.currentId += 1
  }

  public getId(): number {
    return this.id
  }

  public getInfo(): string {
    return JSON.stringify({
      id: this.id,
      name: this.name,
      email: this.email,
    })
  }
}

export default User
