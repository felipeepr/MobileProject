import { CoinsInterface } from "../interfaces/coinsInterface.model";

export class Coins implements CoinsInterface {
    img: string;
    id: number;
    name: string;
    price: number;
    description: string;
    date: string;

    constructor(img: string, id: number, name: string, price: number, description: string, date: string) {
        this.img = img;
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.date = date;
    }

}