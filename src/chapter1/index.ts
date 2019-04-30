enum Operate {
  add = "+",
  subtract = "-",
  multiply = "*",
  divide = "/",
}
class Operation {
  public getResult(a: number, b: number, operate: Operate): number {
    let result: number;
    switch (operate) {
      case Operate.add:
        result = a + b;
        break;
      case Operate.subtract:
        result = a - b;
        break;
      case Operate.multiply:
        result = a * b;
        break;
      case Operate.divide:
        result = a / b;
        break;
    }
    return result;
  }
}
const op1 = new Operation();
console.log(op1.getResult(1, 2, Operate.add));
