import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilder, FormGroup, FormsModule, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonImg, IonButton, IonIcon, IonText, IonLabel } from '@ionic/angular/standalone';
import { CoinsInterface } from 'src/app/data/interfaces/coinsInterface.model';
import { CryptoServices } from 'src/app/data/services/crypto-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-coins',
  templateUrl: './list-coins.page.html',
  styleUrls: ['./list-coins.page.scss'],
  standalone: true,
  imports: [ IonInput, FormsModule, ReactiveFormsModule, IonButton, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonIcon, IonText, CommonModule],
})
export class listCoinsPage implements OnInit {
  private router = inject(Router)
  cryptoService = inject(CryptoServices);
  @Output() coinCreated = new EventEmitter<CoinsInterface>();
  @Output() coinDel = new EventEmitter<CoinsInterface>();
  listCoinForm: FormGroup;
  fb = inject(FormBuilder)

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
      description: "",
      date: ""
  };

  newCoin2: CoinsInterface = {
    img: "",
    id: null,
    name: "",
    price: null,
    description: "",
    date: ""
};

  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  /* JUST SAVED TO 
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
  */
  createForm(){
    this.listCoinForm = new FormGroup({
      img: new FormControl("", [Validators.required, Validators.pattern(/\.(png|jpg|jpeg)$/i)]),
      id: new FormControl(null, [Validators.required]),
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      price: new FormControl(null, [Validators.required])
    });
  };

  saveInfo(i){
    if(this.listCoinForm.valid){
      this.cryptoService.saveCoins(this.newCoin);
      let message = "Coin: " + i + " created, check the crypto shop";
      alert(message);
      this.newCoin = {
        img: "",
        id: null,
        name: "",
        price: null,
        description: "",
        date: ""
      }
    } else {
       this.listCoinForm.markAllAsTouched();
    }
  };

  goToCryptoShop(){
    this.router.navigate(['crypto-shop'])
  }

}
