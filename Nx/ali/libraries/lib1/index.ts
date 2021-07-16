import {prepare} from "@ali/lib2";

export const calculate = (a:number, b:number, operator:string = '+') => {

  const expression = prepare(a , b, operator);
  return eval(expression);

}
