interface BlockShape{
    prevHash: string,
    height: number,
    data: string
}

class Block implements BlockShape {
    public hash: string;
    constructor(
        public prevhash: string,
        public height: number,
        public data: string
    ) {
        this.hash = Block.calculateHash(prevhash, height, data);
    }
    static calculateHash(prevhash:string, height:number, data:string) {
        
    }
}