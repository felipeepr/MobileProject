import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonImg, IonButton, IonIcon, IonText} from '@ionic/angular/standalone';
import { CryptoServices } from 'src/app/data/services/crypto-services';
import { CoinsInterface } from 'src/app/data/interfaces/coinsInterface.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crypto-shop',
  templateUrl: './crypto-shop.page.html',
  standalone: true,
  styleUrls: ['./crypto-shop.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonImg, IonButton, IonIcon, IonText, IonImg,  ]
})
export class CryptoShopPage implements OnInit {
  private router = inject(Router)
  cryptoService = inject(CryptoServices);
  @Input() coinGot: CoinsInterface[] = [].reverse();
  @Output() coinDeleted = new EventEmitter<number>();

  coinsList2 = [
    {
      id: 1,
      title: "BTC",
      price: 115000,
      description: "example",
      category: "ExampleCategory",
      image: "https://www.criptofacil.com/es/wp-content/uploads/sites/2/2025/02/IMG_0183.png",
    },
    {
      id: 2,
      title: "ETH",
      price: 4000,
      description: "example",
      category: "ExampleCategory",
      image: "https://t4.ftcdn.net/jpg/07/72/94/23/360_F_772942398_uKpxMOAqDG2cunliJkDAn31b2LHzHKQU.jpg",
    },
    {
      id: 3,
      title: "SOL",
      price: 187,
      description: "example",
      category: "ExampleCategory",
      image: "https://diariobitcoin.b-cdn.net/wp-content/uploads/2025/05/solana-moneda-sol-diariobitcoin-public-domain.jpg",
    },
    {
      id: 3,
      title: "DOG",
      price: 0.001,
      description: "example",
      category: "ExampleCategory",
      image: "https://s2.coinmarketcap.com/static/img/coins/200x200/30933.png",
    },
  ];

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
  }

  ngOnInit() {
    this.coinGot = this.cryptoService.coinsNamed.reverse();
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then((data) => {this.coinsList2 = this.coinsList2.concat(data)});
  }

}
