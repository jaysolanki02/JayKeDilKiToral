import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: ':language',
    loadComponent: () =>
      import('./app').then(m => m.App)
  },
  {
    path: '',
    redirectTo: 'en',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'en',
  }
]