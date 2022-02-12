class Person {
  public name: string = '';
  // private age: number = 18;
  public age: number = 18;
  protected isMale: boolean = true;
}

const person = new Person();
person.name = 'asd';
person.age = 20;
// person.isMale = false; // 保护的属性，只允许在类中及子代中访问
console.log(person);

class Teacher extends Person {
  constructor (public name: string) {
    super();
    this.name = name;
  }
}

const teacher = new Teacher('Eric');
console.log(teacher);

// 单例模式
class Demo {
  private static instance: Demo;
  private constructor () {}
  // static 静态属性，挂在 Demo 上的
  static getInstance () {
    if (!this.instance) {
      this.instance = new Demo();
    }
    return this.instance;
  }
}
const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();
console.log(demo1 === demo2); // true