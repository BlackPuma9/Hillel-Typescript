interface Student {
  id: string
  name: string
  age: number
}

type Subject = 'Math' | 'Science' | 'Literature' | 'History'

type Grades = Record<Subject, number>

interface UniversityRecord {
  students: Record<string, Student>
  grades: Record<string, Grades>
}

const students: Record<string, Student> = {
  '1': { id: '1', name: 'Alex', age: 20 },
  '2': { id: '2', name: 'Yuliia', age: 30 },
  '3': { id: '3', name: 'Cleo', age: 30 },
}

const grades: Record<string, Grades> = {
  '1': { Math: 90, Science: 100, Literature: 50, History: 20 },
  '2': { Math: 30, Science: 80, Literature: 55, History: 15 },
  '3': { Math: 100, Science: 90, Literature: 90, History: 99 },
  '4': { Math: 100, Science: 80, Literature: 15, History: 15 },
  '5': { Math: 100, Science: 90, Literature: 11, History: 87 },
}

const universityRecord: UniversityRecord[] = [
  {
    students: {
      '1': students['1'],
      '2': students['2'],
      '3': students['3'],
    },
    grades: {
      '1': grades['1'],
      '2': grades['2'],
      '3': grades['3'],
    },
  },
  {
    students: {
      '4': students['4'],
      '5': students['5'],
    },
    grades: {
      '4': grades['4'],
      '5': grades['5'],
    },
  },
]

const getStudentGrades = (
  studentId: string,
  universityRecord: UniversityRecord[],
): Grades | string => {
  for (const record of universityRecord) {
    if (record.grades[studentId]) {
      return record.grades[studentId]
    }
  }
  return 'no data found'
}

console.log(universityRecord)
const studentGrades2 = getStudentGrades('2', universityRecord)
console.log(studentGrades2)

const getAverageGrade = (
  subject: Subject,
  universityRecord: UniversityRecord[],
) => {
  let totalGrade = 0
  let studentCount = 0

  for (const record of universityRecord) {
    for (const studentId in record.grades) {
      totalGrade += record.grades[studentId][subject]
      studentCount++
    }
  }
  if (studentCount === 0) {
    return 'no data found'
  }

  return totalGrade / studentCount
}

const math = getAverageGrade('Math', universityRecord)
console.log(`math`, math)
