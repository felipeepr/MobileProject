import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CryptoShopComponent} from 'src/app/components/crypto-shop/crypto-shop.component'
import { CryptoServices } from 'src/app/data/services/crypto-services';

@Component({
  selector: 'app-crypto-shop2',
  templateUrl: './crypto-shop.page.html',
  standalone: true,
  styleUrls: ['./crypto-shop.page.scss'],
  imports: [ CommonModule, FormsModule, CryptoShopComponent]
})
export class CryptoShopPage implements OnInit {
  constructor() { 
  }

  ngOnInit() {
  }

}
