import { Route } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const productDetailRoutes: Route[] = [
  { path: ':id', component: ProductDetailComponent },
];
