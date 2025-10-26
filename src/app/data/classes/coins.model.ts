import { CoinsInterface } from "../interfaces/coinsInterface.model";

export class Coins implements CoinsInterface {
    img: string;
    id: number;
    name: string;
    price: number;
    description: string;
    date: string;
}