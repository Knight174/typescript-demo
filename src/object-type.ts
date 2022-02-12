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

// 函数参数的类型限制
function getStudentName (student: {name: string, age: number, level?: number}) {
  return student.name;
}
const studentName = getStudentName({
  name: 'Eric',
  age: 18
})
console.log(studentName);