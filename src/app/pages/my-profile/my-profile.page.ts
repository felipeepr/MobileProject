import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonImg} from '@ionic/angular/standalone';
import {CryptoShopComponent } from '../../components/crypto-shop/crypto-shop.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  standalone: true,
  styleUrls: ['./my-profile.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CryptoShopComponent, IonButton, IonInput, IonImg],
})
export class MyProfilePage implements OnInit {

  constructor() { }
  
  title : string = "MY PROFILE";
  name : string = "Felipe";
  lastName : string = "Prieto";
  mail : string = "prietofelipe51@gmail.com";
  birthDate : Date = new Date(2002, 8, 18);
  jobTitle : string = "IT Support Analyst";
  status: boolean = true;

  changeImg(){
    this.status = false;
  }
  ngOnInit() {
  }

}
