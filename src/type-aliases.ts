// 类型别名
// 函数参数
type fullName = {
  firstName: string;
  lastName: string;
}
// type fullName = {
//   firstName: string,
//   lastName: string
// }

type fullNameString = string;

function getFullName (name: fullName): fullNameString {
  return name.firstName + ' ' + name.lastName
}
const fullName = getFullName({
  firstName: 'Eric',
  lastName: 'Knight'
})
console.log(fullName);

// 基本类型
type MyBoolean = true | false | null | undefined // same as boolean
const mybool: MyBoolean = true;
const mybool2: MyBoolean = null;