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
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  coinsList: CoinsInterface[] = [];

  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.listCoinForm = new FormGroup({
      id: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')]),
      title: new FormControl("", [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required, Validators.pattern(/^.*/)]),
      category: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z-.*]$/)]),
      image: new FormControl("", [Validators.required, Validators.pattern(/\.(png|jpg|jpeg)$/i)]),
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
        { id: null,
          title: "",
          price: null,
          description: "",
          category: "",
          image: ""
        }
      )
    }
  };

  goToCryptoShop(){
    this.router.navigate(['crypto-shop'])
  }

}
