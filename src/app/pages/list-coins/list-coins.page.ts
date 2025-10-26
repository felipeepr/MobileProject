import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilder, FormGroup, FormsModule, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonImg, IonButton, IonIcon, IonText, IonLabel } from '@ionic/angular/standalone';
import { CoinsInterface } from 'src/app/data/interfaces/coinsInterface.model';
import { CryptoServices } from 'src/app/data/services/crypto-services';
import { Router } from '@angular/router';
import { list } from 'ionicons/icons';
import { Coins } from 'src/app/data/classes/coins.model';

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
  /*@Output() coinCreated = new EventEmitter<CoinsInterface>();
  @Output() coinDel = new EventEmitter<CoinsInterface>();*/
  listCoinForm: FormGroup;
  validForm: boolean = true;
  buttonS: string = "SAVE";
  fb = inject(FormBuilder)
  form: CoinsInterface[];
  img: string;
  id: number;
  name: string;
  price: number;
  description: ""
  date: ""
  coinsList: CoinsInterface[] = [];
  newCoin: CoinsInterface = {
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

  createForm(){
    this.listCoinForm = new FormGroup({
      img: new FormControl("", [Validators.required, Validators.pattern(/\.(png|jpg|jpeg)$/i)]),
      id: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')]),
      name: new FormControl("", [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required, Validators.pattern(/^.*/)]),
      date: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z-.*]$/)])
    });
  };

  saveInfo(i){
    if(this.listCoinForm.valid ){
      this.validForm = false;
      this.cryptoService.saveCoins(this.listCoinForm.value);
      let message = "Coin: " + i + " created, check the crypto shop";
      alert(message);
      this.listCoinForm.markAsUntouched()
      this.listCoinForm.setValue(
        { img: "",
          id: null,
          name: "",
          price: null,
          description: "",
          date: null
        }
      )
    }
  };

  goToCryptoShop(){
    this.router.navigate(['crypto-shop'])
  }

}
