const username1 = 'Bob';
let username2 = 'admin';

username2;

type Job = 'designer' | 'programmer' | 'manager';

interface User {
    name: String;
    job: Job;
}
const user: User = {
    name: 'Bob',
    job: 'programmer'
}

// | : union type
interface highschoolstudent {{
    name: String;
    grade: 1 | 2 | 3 | 4 | 5 | 6;
}

interface Car{
    name: "car";
    color: string;
    start(): void;
}
interface Mobile{
    name: "mobile";
    color: string;
    call(): void;
}

function getGift(gift: Car | Mobile) {
    // start()의 경우 Car에만 선언되어 있기 때문에 에러가 발생한다.
    return gift.start();
}
//식별가능한 유니온 타입.
function getGift2(gift: Car | Mobile) {
    if (gift.name === 'car') {
        gift.start();
    }
    else {
        gift.call();
    } 
}

interface Car{
    name: "car";
    start(): void;
}
interface Toy{
    name: string;
    color: string;
    price: number;
}
//& : intersection type, 모두 선언되어 있어야 한다.
const toyCar: Car & Toy = {
    name: 'car',
    color: 'red',
    price: 100,
    start: function () {
        console.log('start');
    },
}