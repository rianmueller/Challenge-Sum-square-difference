class SumOfASquare {
  constructor(foo) {
    this.foo = foo;
  }
  sumOfSquares(foo) {
    let sum = 0;
    for (let i = 1; i <= this.foo; i++) {
      sum = sum + i * i;
    }
    return sum;
  }
  squareOfTheSums(foo) {
    let square = 0;
    for (let i = 1; i <= this.foo; i++) {
      square = square + i;
    }
    square = square * square;
    return square;
  }
}

module.exports = {
  SumOfASquare
};
