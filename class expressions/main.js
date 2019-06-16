// function Vehicle() {}

// const vehicle = new Vehicle();
// console.log(vehicle.__proto__ === Vehicle.prototype);

// // console.log('TCL: vehicle', vehicle);

// function Car() {}
// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;

// const car = new Car();

// console.log(car.__proto__ === Car.prototype);
// console.log(car.__proto__.__proto__ === Vehicle.prototype);

// console.log(car);

// function Vehicle() {}

// class Car {
//   abc = function() {
//     this.a = 234;
//   };

//   constructor() {
//     Vehicle.call(this);
//     this.a = 123;
//     this.abc = 123;
//   }
// }

// function Car() {
//   Vehicle.call(this);
//   this.a = 123;
//   this.abc = 123;
// }

// let a = Object.create(Vehicle.prototype);
// Car.prototype = a;
// console.log(Car.prototype === a);

// let car = new Car();
// console.log(car);
// console.log(Car.prototype);

// const car = new Car();
// console.log(car);
// console.log(Car.prototype);
