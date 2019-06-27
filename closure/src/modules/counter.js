function getCounterObject() {
  let counter = 0;
  function increase(value) {
    counter += value;
  }
  function decrease(value) {
    counter -= value;
  }
  function show() {
    console.log('counter', counter);
  }

  const obj = { increase, decrease, show };

  return obj;
}

const counterObj = getCounterObject();
counterObj.increase(3);
counterObj.decrease(5);
counterObj.show();
