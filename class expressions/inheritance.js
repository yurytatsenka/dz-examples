function Vehicle() {} // создание Vehicle, создание объекта 4 на основе базового объекта 5, свойство __proto__ объекта 4 указывает на объект 5

function Car() {} // создание Car, создание объекта 7 на основе базового объекта 5, свойство __proto__ объекта 7 указывает на объект 5, Car.prototype указывает на объект 7, свойство constructor объекта 7 указывает на Car.prototype
Car.prototype = Object.create(Vehicle.prototype); // создание объекта 3, свойство __proto__ объекта 3 указывает на объект 4, Car.prototype теперь указывает на объект 3, а не объект 7
Car.prototype.constructor = Car; // свойство constructor объекта 3 указывает на Car

function Honda() {} // создание Honda, создание объекта 6 на основе базового объекта 5, свойство __proto__ объекта 6 указывает на объект 5
Honda.prototype = Object.create(Car.prototype); // создание объекта 2, свойство __proto__ объекта 2 указывает на объект 3, Honda.prototype теперь указывает на объект 2, а не объект 6
Honda.prototype.constructor = Honda; // свойство constructor объекта 2 указывает на Honda

const honda = new Honda(); // создание объекта 1 на основе объекта 2, константа honda указывает на объект 1
console.log(honda);
