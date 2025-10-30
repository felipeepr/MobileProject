import { inject, Injectable } from '@angular/core';
import { CoinsInterface } from '../interfaces/coinsInterface.model'; 
import { count } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CryptoServices{
  
  coinsNamed: CoinsInterface[] = [];
  coinInCart: CoinsInterface[] = [];
  coins: CoinsInterface;
  
  private http = inject(HttpClient);
  apiURL = "https://fakestoreapi.com/products"

  saveCoins(newCoin: CoinsInterface){
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.coinsNamed)
    })
      .then(response => response.json())
      .then(data => {data = this.coinsNamed.push(newCoin)});
  }

  delCoins(id: CoinsInterface){
    this.coinsNamed.splice(this.coinsNamed.indexOf(id), 1);
  }

  addToCart(cart: CoinsInterface){
    this.coinInCart.push(cart);
  }
}
