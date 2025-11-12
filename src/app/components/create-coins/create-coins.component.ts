import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilder, FormGroup, FormsModule, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonImg, IonButton, IonIcon, IonText, IonLabel, IonItemDivider } from '@ionic/angular/standalone';
import { CoinsInterface } from 'src/app/data/interfaces/coinsInterface.model';
import { CryptoServices } from 'src/app/data/services/crypto-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-coins',
  templateUrl: './create-coins.component.html',
  styleUrls: ['./create-coins.component.scss'],
  standalone: true,
  imports: [IonInput, FormsModule, ReactiveFormsModule, IonButton, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonIcon, IonText, CommonModule, IonItemDivider, CreateCoinsComponent],
})
export class CreateCoinsComponent implements OnInit {
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
  rate: number;
  count: number

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
      category: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z\s-]+$/)]),
      image: new FormControl("", [Validators.required, Validators.pattern(/\.(png|jpg|jpeg)$/i)]),
      rating: this.fb.group({
        rate: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')]),
        count: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')])
      })
    });
  };

  saveInfo(i){
    if(this.listCoinForm.valid){
      this.validForm = false;
      this.cryptoService.saveCoins(this.listCoinForm.value);
      let message = "Coin: " + i + " created, check the crypto shop";
      this.cryptoService.createPost(this.listCoinForm.value).subscribe({
        next: (data) => {
          console.log("Created", data)
        },
        error: (err) => {
          console.log("ERROR", err)
        }
      });
      alert(message);
      console.log(this.listCoinForm.value)
      this.listCoinForm.markAsUntouched()
      this.listCoinForm.patchValue(
        { id: null,
          title: "",
          price: null,
          description: "",
          category: "",
          image: "",
          rating: {
            rate: null,
            count: null
          }
        }
      )
    }
  };

  goToCryptoShop(){
    this.router.navigate(['crypto-shop'])
  }

}
