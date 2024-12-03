import User from './User'
import Course from './Course'

class Student extends User {
  private _courses: Array<Course> = []

  get courses() {
    return Object.freeze(this._courses)
  }

  public enroll(course: Course): void {
    this._courses.push(course)
  }
}

export default Student
