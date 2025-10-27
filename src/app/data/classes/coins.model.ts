import { CoinsInterface } from "../interfaces/coinsInterface.model";

export class Coins implements CoinsInterface {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}