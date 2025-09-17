import { Component, Input, OnInit } from '@angular/core';
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

export class CryptoShopComponent  implements OnInit {
  coins: Coins;
  coinsInterface: CoinsInterface;
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

  buy(i){
    alert(i + " BOUGHT");
    
    //this.coinsList.push({img: 'https://s2.coinmarketcap.com/static/img/coins/200x200/30933.png', id: 1, name: 'Hola', price: 3000});
  }

  sell(i){
    alert(i + " SOLD");
  }

  switchForm: boolean = false;
  /*
  user: string = "";
  deliverAddress: string = "RANDOM STREET";
  country: string = "USA";
  city: string = "NY";
  lang: string = "ES-EN";
  currency: string = "BTC";
  img: string = "https://img.freepik.com/vector-gratis/fondo-moneda-oro-bitcoin-criptomoneda_1017-31505.jpg";
  switchImg: boolean = true;
  */

  constructor() { }

  ngOnInit() {}

  changePrice() {
    let newCoin = new Coins(1, "Hola", 2);
  }
/*
  changeImg() {
    if(this.switchImg){
      this.img = "https://images.theconversation.com/files/506823/original/file-20230127-16-4cgk1e.jpeg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip";
      console.log("IMAGE CHANGED FROM THE ORIGINAL");
      this.switchImg = false;
    } else {
      this.img = "https://img.freepik.com/vector-gratis/fondo-moneda-oro-bitcoin-criptomoneda_1017-31505.jpg";
      console.log("IMAGE CHANGED TO THE ORIGINAL");
      this.switchImg = true;
    }
  }

  statusForm(){
    if(!this.switchForm){
      this.switchForm = true;
      console.log("FORM DISABLED");
    } else {
      this.switchForm = false
      console.log("FORM ENABLED");
    }
  }

  saveForm(){
    if(this.user.length < 1 || this.deliverAddress.length < 1 || this.country.length < 1 || this.city.length < 1 || this.lang.length < 1 
      || this.currency.length< 1) {
      console.log("The form cannot be saved because are fields that still empty");
      alert("The form cannot be saved because are fields that still empty");
    } else {
      console.log("The form was succesfully saved!");
      alert("The form was succesfully saved!");
    }
    
  }
  */
  }

