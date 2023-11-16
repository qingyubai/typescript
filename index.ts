// 基础类型
let number1: number = 1;

let state: boolean = true;

let string1: string = 'abc';

let null1: null = null;

let undefined1: undefined = undefined;

let numlist: number[] = [1, 2, 3];

let numOrStr: (number | string)[] = [1, 2, 'a', 'b'];

// 元祖
let tuple: [string, number]
tuple = ['abc', 26];

// 字面量
type Directions = 'Up' | 'Down' | 'Right' | 'Left'
const string2: Directions = 'Up'

// 枚举
enum EnumData {
    Up,
    Down,
    Left,
    Right
}
let dir: EnumData = EnumData.Up;

// 接口
interface Person {
    name: string;
    age: number;
    sayHi(): void;
}
let testInterface: Person = {
    name: 'aaa',
    age: 25,
    sayHi() {
        
    },
}

// 接口 继承
interface Shape {
    color: string;
}

interface Circle extends Shape {
    radius: number;
}
const circle: Circle = {
    color: 'blue',
    radius: 18,
}

// type aliase
type PlusType = (x: number, y: number) => number;
let sum2: PlusType;
// @ts-ignore
let result2 = sum2(2, 3);

type StrOrNumber = string | number;
let result3: StrOrNumber  = '123'


// 交叉类型
interface IName {
    name: string
}

type IPerson = IName & { age: number }
let person: IPerson = {
    name: '123',
    age: 123
}