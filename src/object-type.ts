// 复杂数据类型：{}, [], function, tuple
// array
const arr: number[] = [1, 2, 3];
const arr2: (number | string)[] = [1, '2', 3];

// 元组
const tuple: [number, string] = [1, '2'];

// function
function func (x: number): number {
  return x;
}

function func2 (x: number): void {
  console.log(x);
}

const func3 = (x: number): number => x;

// object
const obj: object = {};

// 函数参数如果是对象类型（?号表示可选属性）
function getStudentName (student: {name: string, age: number, level?: number}) {
  return student.name;
}
const studentName = getStudentName({
  name: 'Eric',
  age: 18
})
console.log(studentName);

// Union Types: 组合类型，注意分类处理不同类型的参数，否则报错！
function func4 (id: number | string) {
  console.log(id);
}

function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}

// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}