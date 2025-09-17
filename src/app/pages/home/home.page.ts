import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonImg, IonButton, IonIcon, IonText } from '@ionic/angular/standalone';
import { CryptoShopComponent } from 'src/app/components/crypto-shop/crypto-shop.component';
import { CreateCoinsComponent } from 'src/app/components/create-coins/create-coins.component';

import { addIcons } from 'ionicons';
import { heart, logoApple, settingsSharp, star } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonImg, IonButton, IonIcon, IonText, CryptoShopComponent, CreateCoinsComponent],
})
export class HomePage implements OnInit {
  
  constructor() {

    addIcons({ heart, logoApple, settingsSharp, star });
   }


  ngOnInit() {
  }

}
