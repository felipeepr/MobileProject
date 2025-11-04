import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'crypto-shop',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
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
    path: 'crypto-shop',
    loadComponent: () => import('./pages/crypto-shop/crypto-shop.page').then( m => m.CryptoShopPage)
  },
  {
    path: 'shopping-cart',
    loadComponent: () => import('./pages/shopping-cart/shopping-cart.page').then( m => m.ShoppingCartPage)
  },


];
