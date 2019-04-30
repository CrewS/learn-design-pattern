import { Operate } from "./common";
import Operation from "./opv1";
import { OperationFactory } from "./opv2";
const op1 = new Operation();
const test1 = () => console.log(op1.getResult(1, 2, Operate.add));
const test2 = () => {
  const opAdd = OperationFactory.createOperate(Operate.add);
  const opSub = OperationFactory.createOperate(Operate.subtract);
  opAdd.a = 123;
  opAdd.b = 2;
  opSub.a = 123;
  opSub.b = 2;
  console.log(opAdd.getResult(),opSub.getResult() );
};
test2()