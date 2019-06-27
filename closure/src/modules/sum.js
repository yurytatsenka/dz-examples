function sum(value) {
  let result = 0;

  function sum2(param) {
    result += param;
    return sum2;
  }

  sum2.showResult = function() {
    console.log('sum', result);
  };

  sum2(value);

  return sum2;
}

sum(5)(-10)(123).showResult();
