import type { Routes } from '@angular/router';
import { PublicLayout } from './layout/public-layout/public-layout';

export const appRoutes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      {
        path: 'about',
        loadChildren: () =>
          import('./features/about/about.module').then((module) => module.AboutModule),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./features/services/services.module').then((module) => module.ServicesModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./features/contact/contact.module').then((module) => module.ContactModule),
      },
      {
        path: 'rooms',
        loadChildren: () =>
          import('./features/rooms/rooms-module').then((module) => module.RoomsModule),
      },
      {
        path: 'dining',
        loadChildren: () =>
          import('./features/dining/dining-module').then((module) => module.DiningModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./features/home/home.module').then((module) => module.HomeModule),
      },
    ],
  },
];
