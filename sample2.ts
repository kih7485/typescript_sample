type Score = 'A' | 'B' | 'C' | 'D'; 

interface user
{
    name: string;
    age: number;
    gender?: String;
    readonly birthDay: number;
    [grade: number]: Score; //Score type의 값만 입력 가능.
}
// 변수 뒤에 ? : optional -> 있어도 되고 없어도 됨
// readonly 속성을 주면 선언 후에 변경 불가능
// [grade: number]: string -> 키 값이 number인 경우 string으로 설정
// 
let user1: user = {
    name: "kih",
    age: 32,
    birthDay: 19900227
};

interface Add {
    (num1: number, num2: number): number;
}

const add: Add = (n1, n2) => n1 + n2;  //선언만 하면 실행 가능 

interface isAdult {
    (age: number): boolean;
}
const adult: isAdult = (age) => age > 20;
