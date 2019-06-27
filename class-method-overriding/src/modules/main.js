// class Person {
//   personName = 'Person';

//   personMethod = function() {
//     console.log('personMethod class Person');
//   };
// }

// class Student extends Person {
//   studentName = 'Student';

//   // studentMethod() {
//   //   console.log(this.frontendStudentName);
//   //   // this.abc = function() {};
//   //   // console.log('studentMethod class Student');
//   // }
// }

// // const student = new Student();
// // student.studentMethod();

// class FrontendStudent extends Student {
//   frontendStudentName = 'FrontendStudent';

//   personMethod() {
//     console.log('personMethod');
//   }

//   frontendStudentMethod() {
//     super.personMethod();
//     // super.studentMethod();
//     // console.log('frontendStudentMethod class Frontend Student');
//   }
// }

// const frontendStudent = new FrontendStudent();
// // // console.log('TCL: frontendStudent', frontendStudent);
// frontendStudent.frontendStudentMethod();

function doMyFunction(param, param2) {
  console.log(param2);
}

// const obj = {
//   // abc: 'abc'
// };

// doMyFunction()
// const array = [123, 234];

doMyFunction.call(obj, [123, 234], [555, 777]);
// doMyFunction.call(obj, 123, 234);

// const doSomething = doMyFunction.bind({ abc: 'abc' }, 123, 555);
// doSomething(345, 666);

// doMyFunction();
