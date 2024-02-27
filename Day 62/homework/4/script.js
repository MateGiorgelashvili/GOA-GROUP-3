const calculator = {
  sum: (x,y) => {
    return x + y
  },
  substract: (x,y) => {
    return x - y
  },
  multiply: (x,y) => {
    return x * y
  },
  division: (x,y) => {
    return x / y
  },
}

console.log(calculator.sum(60,100));
console.log(calculator.substract(600,100));
console.log(calculator.multiply(6,10));
console.log(calculator.division(60,2));