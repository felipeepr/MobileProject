import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonImg, IonButton, IonIcon, IonText, IonItem} from '@ionic/angular/standalone';
import { CryptoServices } from 'src/app/data/services/crypto-services';
import { CoinsInterface } from 'src/app/data/interfaces/coinsInterface.model';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {arrowUpCircleOutline, cartOutline} from 'ionicons/icons';

@Component({
  selector: 'app-crypto-shop',
  templateUrl: './crypto-shop.component.html',
  standalone: true,
  styleUrls: ['./crypto-shop.component.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonImg, IonButton, IonIcon, IonText, IonImg, IonItem]
})
export class CryptoShopComponent implements OnInit {
  private router = inject(Router)
  cryptoService = inject(CryptoServices);
  @Input() coinGot: CoinsInterface[] = [].reverse();
  @Output() coinDeleted = new EventEmitter<number>();
  coinsList2 = [];

  deleteCoin(id: CoinsInterface){
    this.cryptoService.delCoins(id);
  }

  deletePreCreated(coin: CoinsInterface){
    this.coinsList2.splice(this.coinsList2.indexOf(coin), 1);
  }

  addToCart(i, cart: CoinsInterface){
    this.cryptoService.addToCart(cart);
    let message = "Item: " +i+ " Added, check CART"
    alert(message);
  }

  buy(i){
    alert(i + " BOUGHT");
  }

  sell(i, j){
    alert(i + " SOLD");
    this.deleteCoin(j);
  }

  sellPrecreated(i, j: CoinsInterface){
    alert(i + " SOLD");
    this.deletePreCreated(j);
} 

  goCart(){
    this.router.navigate(['shopping-cart'])
  }

  constructor() { 
    addIcons({arrowUpCircleOutline, cartOutline});
  }

  ngOnInit() {
    this.cryptoService.getPost().subscribe({
      next: (data) => {
        this.coinsList2 = this.cryptoService.coinsNamed.concat(data)
        console.log(this.coinsList2)
      },
      error: (err) => {
        console.log("Error", err)
      }
    })
  }

}
