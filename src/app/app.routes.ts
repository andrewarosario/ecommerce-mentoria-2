import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('@ecommerce-mentoria-2/home').then((c) => c.homeRoutes),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('@ecommerce-mentoria-2/product-detail').then(
        (c) => c.productDetailRoutes
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@ecommerce-mentoria-2/auth-form').then((c) => c.authFormRoutes),
  },
];
