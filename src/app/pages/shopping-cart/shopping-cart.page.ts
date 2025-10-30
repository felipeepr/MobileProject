import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonImg, IonInput, IonLabel} from '@ionic/angular/standalone';
import { CryptoServices } from 'src/app/data/services/crypto-services';
import { CoinsInterface } from 'src/app/data/interfaces/coinsInterface.model';
import { Coins } from 'src/app/data/classes/coins.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonImg, IonInput, IonLabel]
})
export class ShoppingCartPage implements OnInit {
  private router = inject(Router);
  cryptoService = inject(CryptoServices);
  cartList: CoinsInterface[] = [];
  constructor() { }

  removeFromCart(item: CoinsInterface){
    this.cartList.splice(this.cartList.indexOf(item, 1));
  }

  goToCryptoShop(){
    this.router.navigate(['crypto-shop']);
  }
  ngOnInit() {
    this.cartList = this.cryptoService.coinInCart;
  }

}
