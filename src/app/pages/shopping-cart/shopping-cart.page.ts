import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonImg, IonInput } from '@ionic/angular/standalone';
import { CryptoServices } from 'src/app/data/services/crypto-services';
import { CoinsInterface } from 'src/app/data/interfaces/coinsInterface.model';
import { Coins } from 'src/app/data/classes/coins.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonImg, IonInput]
})
export class ShoppingCartPage implements OnInit {
  cryptoService = inject(CryptoServices);
  cartList: CoinsInterface[] = [];
  constructor() { }

  removeFromCart(item: CoinsInterface){
    this.cartList.splice(this.cartList.indexOf(item, 1));
  }

  ngOnInit() {
    this.cartList = this.cryptoService.coinInCart;
  }

}
