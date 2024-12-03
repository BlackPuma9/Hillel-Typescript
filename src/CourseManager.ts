import Teacher from './Teacher'
import Student from './Student'
import User from './User'
import Course from './Course'

interface Report {
  courses: Array<Course>
  teacher: Array<Teacher>
  student: Array<Student>
}

class CourseManager {
  private users: Array<User | Teacher> = []
  private courses: Array<Course> = []

  public addUser(user: User): void {
    this.users.push(user)
  }

  public addCourse(course: Course): void {
    this.courses.push(course)
  }

  public assignTeacherToCourse(courseId: number, teacherId: number): void {
    const course = this.courses.find(course => course.id === courseId)
    if (!course) {
      throw new Error('Course not found')
    }

    const teacher = this.users.find(
      user => user.id === teacherId && user instanceof Teacher,
    )
    if (!teacher) {
      throw new Error('Teacher not found')
    }

    if (teacher instanceof Teacher) {
      teacher.addSubject(course)
    }
  }

  public enrollStudentToCourse(courseId: number, studentId: number): void {
    const course = this.courses.find(course => course.id === courseId)
    if (!course) {
      throw new Error('Course not found')
    }

    const student = this.users.find(student => student.id === studentId)
    if (!student) {
      throw new Error('Student not found')
    }

    if (student instanceof Student) {
      student.enroll(course)
    }
  }

  public generateReport(): Report {
    return {
      courses: this.courses,
      teacher: this.users.filter(user => user instanceof Teacher),
      student: this.users.filter(user => user instanceof Student),
    }
  }
}

export default CourseManager
