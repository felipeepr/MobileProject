import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonImg, IonButton, IonIcon, IonText } from '@ionic/angular/standalone';
import { Coins } from 'src/app/data/classes/coins.model';
import { CoinsInterface } from 'src/app/data/interfaces/coinsInterface.model';

@Component({
  selector: 'app-create-coins',
  templateUrl: './create-coins.component.html',
  standalone: true,
  styleUrls: ['./create-coins.component.scss'],
  imports: [ IonInput, FormsModule, IonButton, Coins],
})
export class CreateCoinsComponent  implements OnInit {
  img: string = "";
  id: number = 0;
  name?: string = "";
  price: number = 0;
  @Output() listCoin = new EventEmitter<Coins>();

  constructor() { }

  ngOnInit() {}

  sendCoin (){
    let newCoin: Coins = {
      img: this.img,
      id: this.id,
      name: this.name,
      price: this.price
    }

    this.listCoin.emit(newCoin);
  };
/*
  listCoin (img: string, id: number, name: string, price: number){
    if (img != null && id != null && name != null && price != null){
      this.coinsList.push({img: this.img, id: this.id, name: this.name, price: this.price});
    } else {
      alert("You're missing to fill a field")
    }
  }
*/
}
