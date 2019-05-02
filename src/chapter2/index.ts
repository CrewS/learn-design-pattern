// 实现不同收费方式的类

abstract class CashSuper {
  abstract acceptCash(money: number): number;
}

class CashNormal extends CashSuper {
  public acceptCash(money: number): number {
    return money;
  }
}
class CashRebate extends CashSuper {
  private moneyRetabe = 1;

  constructor(moneyRetabe: number) {
    super();
    this.moneyRetabe = moneyRetabe;
  }
  public acceptCash(money: number): number {
    return money * this.moneyRetabe;
  }
}

class CashReturn extends CashSuper {
  private moneyCondition: number = 0;
  private moneyReturn: number = 1;
  constructor(moneyCondition: number, moneyReturn: number) {
    super();
    this.moneyCondition = moneyCondition;
    this.moneyReturn = moneyReturn;
  }
  public acceptCash(money: number): number {
    let result: number;
    if (money >= this.moneyCondition)
      result = money - (money / this.moneyCondition) * this.moneyReturn;
    return result;
  }
}
class CashFactory {
  public static createCashAccept(type: string): CashSuper {
    let cs: CashSuper;
    switch (type) {
      case "正常收费":
        cs = new CashNormal();
        break;
      case "满300返100":
        cs = new CashReturn(300, 100);
        break;
      case "打8折":
        cs = new CashRebate(0.8);
        break;
		}
		return cs;
  }
}
// const test1: CashSuper = CashFactory.createCashAccept('正常收费')
// const test2: CashSuper = CashFactory.createCashAccept('满300返100')
// const test3: CashSuper = CashFactory.createCashAccept('打8折');
// console.log('tes1',test1.acceptCash(300))
// console.log('tes2',test2.acceptCash(300))
// console.log('tes3',test3.acceptCash(300))


// 策略模式与简单工厂类实现
// 策略模式是一种定义一系列算法的方法，作用：它以相同的方式调用所有的方法，减少了各种算法与使用算法类之间的耦合。
class CashContext{
	private cs: CashSuper;
	constructor(type: string){
    switch (type) {
      case "正常收费":
        this.cs = new CashNormal();
        break;
      case "满300返100":
        this.cs = new CashReturn(300, 100);
        break;
      case "打8折":
        this.cs = new CashRebate(0.8);
        break;
		}
	}
	public getResult(money: number) :number{
		return this.cs.acceptCash(money);
	}
}
const test1: CashContext  = new CashContext('正常收费');
const test2: CashContext  = new CashContext('满300返100');
const test3: CashContext  = new CashContext('打8折');
console.log('tes1',test1.getResult(300))
console.log('tes2',test2.getResult(300))
console.log('tes3',test3.getResult(300))