import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/movies/pages/movies-list/movies-list')
        .then(m => m.MoviesListComponent)
  },
  { path: '**', redirectTo: '' }
];
