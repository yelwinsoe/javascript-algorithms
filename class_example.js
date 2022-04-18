class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  getFirstName () {
    return this.firstName
  }

  getFullName () {
    return this.firstName + ' ' + this.lastName
  }
  
  static EnrollStudents(...students) {
    console.log(students)
    return 'enrolling students'
  }
}

student_one = new Student('Ye', 'Lwin Soe')
student_two = new Student('Andy', 'Ng')
console.log(student_one.getFullName())
console.log(student_two.getFullName())

console.log(Student.EnrollStudents(student_one, student_two))