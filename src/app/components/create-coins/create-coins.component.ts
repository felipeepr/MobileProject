import { Component, EventEmitter, OnInit, Output, Input, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonImg, IonButton, IonIcon, IonText, IonLabel } from '@ionic/angular/standalone';
import { CryptoServices } from 'src/app/data/services/crypto-services';
import { CoinsInterface } from 'src/app/data/interfaces/coinsInterface.model';

@Component({
  selector: 'app-create-coins',
  templateUrl: './create-coins.component.html',
  standalone: true,
  styleUrls: ['./create-coins.component.scss'],
  imports: [ IonInput, FormsModule, IonButton, IonLabel],
})
export class CreateCoinsComponent  implements OnInit {
  cryptoService = inject(CryptoServices);
  coinSaved: CoinsInterface[];
  @Output() coinCreated = new EventEmitter<CoinsInterface>();
  @Output() coinDel = new EventEmitter<CoinsInterface>();
  img: string;
  id: number;
  name: string;
  price: number;
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
  }

  createCoin (){
    this.coinCreated.emit(this.newCoin);
    this.newCoin = {
      img: "",
      id: null,
      name: "",
      price: null,
      description: "",
      date: ""
    }
  };

  createCoinService (){
    this.cryptoService.saveCoins(this.newCoin);
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
