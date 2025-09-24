import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonImg, IonButton, IonIcon, IonText } from '@ionic/angular/standalone';
import { Coins } from '../../data/classes/coins.model'
import { CreateCoinsComponent } from '../create-coins/create-coins.component';
import { CoinsInterface } from '../../data/interfaces/coinsInterface.model';

import { addIcons } from 'ionicons';
import { heart, logoApple, settingsSharp, star } from 'ionicons/icons';
import { map } from 'rxjs';

@Component({
  selector: 'app-crypto-shop',
  templateUrl: './crypto-shop.component.html',
  standalone: true,
  styleUrls: ['./crypto-shop.component.scss'],
  imports: [ IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonImg, IonButton, IonIcon, IonText, IonImg, CreateCoinsComponent],
})

export class CryptoShopComponent  implements OnInit{
  @Input() coinsList: CoinsInterface[] = [];
  @Output() coinDeleted = new EventEmitter<number>();
/*
  coinsList = [
    {
      img: "https://www.criptofacil.com/es/wp-content/uploads/sites/2/2025/02/IMG_0183.png",
      id: 1,
      name: "BTC",
      price: 115000,
    },
    {
      img: "https://t4.ftcdn.net/jpg/07/72/94/23/360_F_772942398_uKpxMOAqDG2cunliJkDAn31b2LHzHKQU.jpg",
      id: 2,
      name: "ETH",
      price: 4000,
    },
    {
      img: "https://diariobitcoin.b-cdn.net/wp-content/uploads/2025/05/solana-moneda-sol-diariobitcoin-public-domain.jpg",
      id: 3,
      name: "SOL",
      price: 187,
    },
    {
      img: "https://s2.coinmarketcap.com/static/img/coins/200x200/30933.png",
      id: 3,
      name: "DOG",
      price: 0.001,
    },
  ];
*/

deleteCoin(id: number){
  this.coinDeleted.emit(id);
}

  buy(i){
    alert(i + " BOUGHT");
  }

  sell(i, j){
    alert(i + " SOLD");
    this.deleteCoin(j);
  }
/*
  listCoin (img: string, id: number, name: string, price: number){
    if (img != null && id != null && name != null && price != null){
      this.coinsList.push({img: this.img, id: this.id, name: this.name, price: this.price});
    } else {
      alert("You're missing to fill a field")
    }
  }
*/
  constructor() { }

  ngOnInit() {}

  }

