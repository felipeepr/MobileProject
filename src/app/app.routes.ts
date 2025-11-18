import { Routes } from '@angular/router';
import { CryptoShopPage } from './pages/crypto-shop/crypto-shop.page';
import { CryptoShopComponent } from './components/crypto-shop/crypto-shop.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'crypto-shop',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'my-profile',
    loadComponent: () => import('./pages/my-profile/my-profile.page').then( m => m.MyProfilePage)
  },
  {
    path: 'list-coins',
    loadComponent: () => import('./pages/list-coins/list-coins.page').then( m => m.listCoinsPage)
  },
  {
    path: 'crypto-shop', component: CryptoShopComponent
  },
  {
    path: 'shopping-cart',
    loadComponent: () => import('./pages/shopping-cart/shopping-cart.page').then( m => m.ShoppingCartPage)
  },

];
