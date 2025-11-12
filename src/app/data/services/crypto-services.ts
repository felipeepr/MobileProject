import { inject, Injectable } from '@angular/core';
import { CoinsInterface } from '../interfaces/coinsInterface.model'; 
import { count, Observable } from 'rxjs';
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
    this.coinsNamed.push(newCoin);
  }

  createPost(newCoin: CoinsInterface): Observable<CoinsInterface[]>{
    return this.http.post<CoinsInterface[]>(this.apiURL, newCoin);
  }

  getPost(): Observable<CoinsInterface[]>{
    return this.http.get<CoinsInterface[]>(this.apiURL);
  }

  delCoins(id: CoinsInterface){
    this.coinsNamed.splice(this.coinsNamed.indexOf(id), 1);
  }

  addToCart(cart: CoinsInterface){
    this.coinInCart.push(cart);
  }
}
