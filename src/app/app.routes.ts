import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./view/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'cep',
    loadComponent: () => import('./view/cep/cep.page').then( m => m.CepPage)
  },
  {
    path: 'pessoa',
    loadComponent: () => import('./view/pessoa/pessoa.page').then( m => m.PessoaPage)
  },
];
