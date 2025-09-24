import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonImg, IonButton, IonIcon, IonText } from '@ionic/angular/standalone';
import { CryptoShopComponent } from 'src/app/components/crypto-shop/crypto-shop.component';
import { CreateCoinsComponent } from 'src/app/components/create-coins/create-coins.component';

import { addIcons } from 'ionicons';
import { heart, logoApple, settingsSharp, star } from 'ionicons/icons';
import { Coins } from 'src/app/data/classes/coins.model';
import { CoinsInterface } from 'src/app/data/interfaces/coinsInterface.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonImg, IonButton, IonIcon, IonText, CryptoShopComponent, CreateCoinsComponent],
})
export class HomePage implements OnInit {
  
  constructor() {

    addIcons({ heart, logoApple, settingsSharp, star });
   }

  coinsList: CoinsInterface[] = [];

  addCoin (newCoin: CoinsInterface) {
    this.coinsList.push(newCoin);
  }

  removeCoin(id: number) {
    this.coinsList = this.coinsList.filter(coin => coin.id !== id);
  }

  ngOnInit() {
  }

}
