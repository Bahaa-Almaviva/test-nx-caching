import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'about',
    loadChildren: () =>
      import('@ps-doggo-rating/about/feature').then((m) => m.ABOUT_ROUTES),
  },
];
