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
const arr2: (number | string)[] = [1, '2'];
const arr3: {name: string, age: number}[] = [{
  name: 'Eric',
  age: 18
}]

// 自定义类型
type User = {name: string, age: number};
const arr4: User[] = [{
  name: 'Eric',
  age: 18
}];

// tuple
const tup: [number, number] = [1, 2];
// csv
const teachers: ([string, string, number])[] = [
  ['Eric', 'male', 18],
  ['Eric2', 'female', 20],
  ['Eric3', 'male', 21]
]

// 其他 case
interface Person {
  name: string;
  age: number;
}
const rawData = '{"name": "dell"}';
const newData: Person = JSON.parse(rawData);

// 函数参数处理
interface Book {
  // readonly name: string;
  name: string;
  price?: number;
  [propName: string]: any;
  say?(): string;
}

function getBookName (book: Book) {
  return book.name;
}

function setBookName (book: Book, name: string): void {
  book.name = name;
}

const book = {
  name: 'typescript book',
  price: 299,
  author: 'Microsoft'
}

const bookName = getBookName(book);
setBookName(book, 'TS Book');
console.log(bookName);

// 多种基础类型
let temp: number | string = 1;
temp = '1';