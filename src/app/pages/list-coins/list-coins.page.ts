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
  imports: [ IonInput, FormsModule, ReactiveFormsModule, IonButton, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonIcon, IonText],
})
export class listCoinsPage implements OnInit {
  private router = inject(Router)
  cryptoService = inject(CryptoServices);
  @Output() coinCreated = new EventEmitter<CoinsInterface>();
  @Output() coinDel = new EventEmitter<CoinsInterface>();
  listCoinForm: FormGroup;

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

  constructor(private fb: FormBuilder) { }

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
    this.listCoinForm = this.fb.group({
      img: ["", [Validators.required]],
      id: [null, [Validators.required]],
      name: ["", [Validators.required, Validators.minLength(2)]],
      price: [null, [Validators.required]]
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
      }
    } else {
      alert("The form isn't valid, please check the information again!")
    }
  };

  goToCryptoShop(){
    this.router.navigate(['crypto-shop'])
  }

}
