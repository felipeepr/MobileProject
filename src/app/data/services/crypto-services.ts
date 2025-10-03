import { Injectable } from '@angular/core';
import { CoinsInterface } from '../interfaces/coinsInterface.model'; 
@Injectable({
  providedIn: 'root'
})
export class CryptoServices{
  
  coinsNamed: CoinsInterface[] = [];

  saveCoins(newCoin: CoinsInterface){
    this.coinsNamed.push(newCoin);
  }
}
