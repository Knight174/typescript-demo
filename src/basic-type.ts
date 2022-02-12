// 基础类型：boolean, number, string, void, undefined, symbol
const a: number = 1;

const b: boolean = true; // false

const c: string = '1';

const d: undefined = undefined;

const e: null = null;

const f: symbol = Symbol();

const g: void = undefined;

const h: unknown = undefined;
const i: unknown = null;


const j: (number | string) = 1;
// const j: (number | string) = '1'

// A variable which is not sure at once. TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.
const k: any = undefined || null;

console.log(a, b, c, d, e, f, g, h, i, j, k);
