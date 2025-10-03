import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CryptoShopPage } from './crypto-shop.page';

describe('CryptoShopPage', () => {
  let component: CryptoShopPage;
  let fixture: ComponentFixture<CryptoShopPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
