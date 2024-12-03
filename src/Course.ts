import Student from './Student'
import BaseModel from './BaseModel'
import Teacher from './Teacher'

class Course extends BaseModel {
  private static currentId = 1

  private readonly _id: number
  private readonly _teacher: Teacher
  private _name: string
  private _students: Array<Student> = []

  constructor({ name, teacher }: { name: string; teacher: Teacher }) {
    super()
    this._name = name
    this._teacher = teacher
    this._id = Course.currentId
    Course.currentId += 1
  }

  get id() {
    return this._id
  }

  get name() {
    return this._name
  }

  set name(newName: string) {
    this._name = newName
  }

  public addStudent(student: Student) {
    const result = this._students.find(s => s.id === student.id)
    if (!result) {
      this._students.push(student)
    }
  }

  public removeStudent(studentId: number) {
    this._students = this._students.filter(student => student.id !== studentId)
  }

  public listStudents(): Readonly<Array<Student>> {
    return Object.freeze(this._students)
  }

  public validate() {
    if (!this._teacher) {
      throw new Error('Teacher must be not empty.')
    }
  }
}

export default Course
