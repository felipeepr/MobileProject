import { CoinsInterface } from "../interfaces/coinsInterface.model";
import { RatingInterface } from "../interfaces/ratingInterface.model";

export class Coins implements CoinsInterface{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: RatingInterface;

    constructor(coin: CoinsInterface){
        this.id = coin.id;
        this.title = coin.title;
        this.price = coin.price;
        this.description = coin.description;
        this.category = coin.category;
        this.image = coin.image;
        this.rating = coin.rating;
    }
}