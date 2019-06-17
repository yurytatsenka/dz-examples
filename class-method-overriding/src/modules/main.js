class Person {
  constructor() {
    this.doSomething();
  }

  doSomething() {
    console.log('doSomething class Person');
  }
}

class Student extends Person {
  constructor(firstName, lastName) {
    super();
  }

  doSomething() {
    super.doSomething();
    console.log('doSomething class Student');
  }
}

const student = new Student();
