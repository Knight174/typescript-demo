/**
 * Type Annotations 类型推断
 * Wherever possible, TypeScript tries to automatically infer the types in your code.
 * 简单说就是，就算不显式写出变量的类型，ts 也会自动帮我们推断出它的类型 (type)。
 */

/**
 * e.g.
 * No type annotation needed -- 'myName' inferred as type 'string'
 * let myName: string = "Alice";
 */
let myName = "Alice";