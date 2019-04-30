// 封装加减乘除
import { Operate } from "./common";
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
export default Operation;
