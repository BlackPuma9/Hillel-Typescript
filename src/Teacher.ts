import User from './User'
import Course from './Course'

class Teacher extends User {
  private _subjects: Array<Course> = []

  get subjects() {
    return Object.freeze(this._subjects)
  }

  public addSubject(subject: Course) {
    this._subjects.push(subject)
  }
}

export default Teacher
