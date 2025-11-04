
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonLabel, IonRouterOutlet, IonRouterLink, IonButton } from '@ionic/angular/standalone';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline, homeOutline, cartOutline, storefrontOutline, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, personCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, IonButton, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home-outline' },
    { title: 'Profile', url: '/my-profile', icon: 'person-circle-outline' },
    { title: 'List Coins', url: '/list-coins', icon: "add-circle-outline" },
    { title: 'Crypto Shop', url: '/crypto-shop', icon: 'storefront-outline' },
    { title: 'Shopping Cart', url: '/shopping-cart', icon: 'cart-outline' },
  ];
  /*public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];  }*/
  constructor() {
    addIcons({ addCircleOutline, cartOutline, homeOutline, storefrontOutline, personCircleOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
}
