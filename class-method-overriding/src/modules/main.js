class Person {
  personName = 'Person';

  constructor() {
    this.personMethod();
  }

  personMethod() {
    console.log('doSomething class Person');
  }
}

class Student extends Person {
  studentName = 'Student';

  constructor(firstName, lastName) {
    super();
    // this.studentMethod();
  }

  studentMethod() {
    // super.doSomething();
    console.log('doSomething class Student');
  }
}

class FrontendStudent extends Student {
  frontendStudentName = 'FrontendStudent';

  constructor(firstName, lastName) {
    super();
    this.frontendStudentMethod();
  }

  frontendStudentMethod() {
    // super.doSomething();
    console.log('doSomething class Frontend Student');
  }
}

const frontendStudent = new FrontendStudent();
console.log('TCL: frontendStudent', frontendStudent);

// function Person() {}
// Person.prototype.personMethod = function() {};
// function Student() {}

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.studentMethod = function() {};
// const student = new Student();
// console.log('TCL: student', student);
