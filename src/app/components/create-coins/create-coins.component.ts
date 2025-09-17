import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonImg, IonButton, IonIcon, IonText } from '@ionic/angular/standalone';
import { CoinsInterface } from 'src/app/data/interfaces/coinsInterface.model';

@Component({
  selector: 'app-create-coins',
  templateUrl: './create-coins.component.html',
  styleUrls: ['./create-coins.component.scss'],
  imports: [ IonInput, FormsModule, IonButton],
})
export class CreateCoinsComponent  implements OnInit, CoinsInterface {
  img: string;
  id: number;
  name?: string;
  price: number;

  constructor() { }

  ngOnInit() {}


}
