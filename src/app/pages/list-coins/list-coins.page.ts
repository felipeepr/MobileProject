import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonImg, IonButton, IonIcon, IonText, IonLabel } from '@ionic/angular/standalone';
import { CoinsInterface } from 'src/app/data/interfaces/coinsInterface.model';
import { CryptoServices } from 'src/app/data/services/crypto-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-coins',
  templateUrl: './list-coins.page.html',
  styleUrls: ['./list-coins.page.scss'],
  standalone: true,
  imports: [ IonInput, FormsModule, IonButton, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonIcon, IonText],
})
export class listCoinsPage implements OnInit {
  private router = inject(Router)
  cryptoService = inject(CryptoServices);
  coinSaved: CoinsInterface[];
  @Output() coinCreated = new EventEmitter<CoinsInterface>();
  @Output() coinDel = new EventEmitter<CoinsInterface>();
  img: string;
  id: number;
  name: string;
  price: number;
  coinsList: CoinsInterface[] = [];
  newCoin: CoinsInterface = {
      img: "",
      id: null,
      name: "",
      price: null,
  };

  newCoin2: CoinsInterface = {
    img: "",
    id: null,
    name: "",
    price: null,
};

  constructor() { }

  ngOnInit() {
  }

  createCoinService (i){
    this.cryptoService.saveCoins(this.newCoin);
    let message = "Coin: " +i+ " created, check the crypto shop";
    alert(message);
    this.newCoin = {
      img: "",
      id: null,
      name: "",
      price: null,
    }
  };

  goToCryptoShop(){
    this.router.navigate(['crypto-shop'])
  }

}
