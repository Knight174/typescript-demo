// 自己进行类型推断
const a = 1; // 等价于 const a: number = 1;
const b = 2;
const c = a + b; // 这里也可以自己推断

// 基础类型：boolean, number, string, void, undefined, symbol
const count: number = 1;
const bool: boolean = true; // false
const str: string = '1';
const udf: undefined = undefined;
const nill: null = null;
// const syb: symbol = Symbol();

// 对象类型：{}, class, function, []
const addS = (str: string): string => {
  return str + 's'
}

function doubleNumber (num: number): number {
  return num * 2;
}

const date: Date = new Date();

const obj: object = {
  a: 1,
  b: 2
}

const arr: number[] = [1, 2];
const tup: [number, number] = [1, 2]; // tuple

// 其他 case
interface Person {
  name: 'string'
}
const rawData = '{"name": "dell"}';
const newData: Person = JSON.parse(rawData);

// 多种基础类型
let temp: number | string = 1;
temp = '1';