// 简单工厂函数封装类
import { Operate } from "./common";
class Operation {
  private _a: number;
  private _b: number;
  public get a(): number {
    return this._a;
  }
  public get b(): number {
    return this._b;
  }
  public set a(a: number) {
    this._a = a;
  }
  public set b(b: number) {
    this._b = b;
  }
  public getResult(): number {
    return 0;
  }
}
class OperationAdd extends Operation {
  public getResult(): number {
    return this.a + this.b;
  }
}
class OperationSub extends Operation {
  public getResult(): number {
    return this.a - this.b;
  }
}
class OperationMut extends Operation {
  public getResult(): number {
    return this.a * this.b;
  }
}
class OperationDiv extends Operation {
  public getResult(): number {
    return this.a / this.b;
  }
}

class OperationFactory {
  public static createOperate(operate: Operate): Operation {
    let oper: Operation;
    switch (operate) {
      case Operate.add:
        oper = new OperationAdd();
        break;
      case Operate.subtract:
        oper = new OperationSub();
        break;
      case Operate.multiply:
        oper = new OperationMut();
        break;
      case Operate.divide:
        oper = new OperationDiv();
        break;
    }
    return oper;
  }
}
export { OperationFactory };
