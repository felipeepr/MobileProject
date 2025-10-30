import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilder, FormGroup, FormsModule, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonImg, IonButton, IonIcon, IonText, IonLabel } from '@ionic/angular/standalone';
import { CoinsInterface } from 'src/app/data/interfaces/coinsInterface.model';
import { CryptoServices } from 'src/app/data/services/crypto-services';
import { Router } from '@angular/router';
import { list } from 'ionicons/icons';
import { Coins } from 'src/app/data/classes/coins.model';
import { CreateCoinsComponent } from "src/app/components/create-coins/create-coins.component";

@Component({
  selector: 'app-list-coins',
  templateUrl: './list-coins.page.html',
  styleUrls: ['./list-coins.page.scss'],
  standalone: true,
  imports: [IonInput, FormsModule, ReactiveFormsModule, IonButton, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonIcon, IonText, CommonModule, CreateCoinsComponent],
})
export class listCoinsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
