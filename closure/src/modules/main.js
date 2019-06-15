function getCounterObject() {
  let counter = 0;
  function increase(value) {
    counter += value;
  }
  function decrease(value) {
    counter -= value;
  }
  function show() {
    console.log(counter);
  }
  return { increase, decrease, show };
}

const counterObj = getCounterObject();
counterObj.increase(3);
counterObj.decrease(5);
counterObj.show();
