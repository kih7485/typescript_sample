let age: number = 30;
let isAdult: boolean = true;
let a: number[] = [1, 2, 3];
let b: Array<number> = [1, 2, 3];

let week1: string[] = ['mon', 'tue', 'wed'];
let week2: Array<string> = ['mon', 'tue', 'wed'];

//튜플
let bb: [number, string] = [1, 'a'];

//void,never
//never는 예외를 발생시키지 않는다. 또는 while, for 등의 loop문에 사용한다.
function sayHello(): void {
    console.log('hello');
}
function infLoof(): never {
    while (true) {
    }
}

//enum
enum Os{
    WINDOWS,
    LINUX,
    MAC
}

let myOs: Os;

//null, undefined
let aaa: null = null;
let bbb: undefined = undefined;