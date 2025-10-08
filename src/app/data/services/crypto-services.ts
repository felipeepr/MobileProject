import { Injectable } from '@angular/core';
import { CoinsInterface } from '../interfaces/coinsInterface.model'; 
import { count } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CryptoServices{
  
  coinsNamed: CoinsInterface[] = [];
  coinInCart: CoinsInterface[] = [];
  coins: CoinsInterface;

  saveCoins(newCoin: CoinsInterface){
    this.coinsNamed.push(newCoin);
  }

  delCoins(id: CoinsInterface){
    this.coinsNamed.splice(this.coinsNamed.indexOf(id), 1);
  }

  addToCart(cart: CoinsInterface){
    this.coinInCart.push(cart);
  }
}
