import { CoinsInterface } from "../interfaces/coinsInterface.model";

export class Coins implements CoinsInterface {
    img: string;
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

}