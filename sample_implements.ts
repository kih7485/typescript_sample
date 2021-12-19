//implements
interface Car {
    color: string;
    wheels: number;
    start() : void;
}

class BMW implements Car {
    color;
    constructor(c: string) {
        this.color = c;
    }
    
    wheels = 4;
    start() {
        console.log('start');
    }  
}

const asd = new BMW('red');
console.log(asd);

interface Benz extends Car {
    door: number;
    stop(): void;
}

const benz: Benz = {
    door: 5,
    stop: () => { console.log('stop'); },
    color: "",
    wheels: 0,
    start: function (): void { 
        throw new Error("Function not implemented.");
    }
}

interface Toy {
    name: string;
}

interface toyCar extends Car, Toy {
    price: number;
}