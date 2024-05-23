import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  CartService,
  Product,
  ProductSearchService,
} from '@ecommerce-mentoria-2/product-data-access';
import { ProductCardComponent } from '@ecommerce-mentoria-2/product-ui';
import { Observable, switchMap } from 'rxjs';
import { QuantityDescriptionPipe } from '../pipes/quantity-description/quantity-description.pipe';
import { getParams } from './get-params';

@Component({
  selector: 'ecommerce-mentoria-2-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    QuantityDescriptionPipe,
    MatButtonModule,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  productSearchService = inject(ProductSearchService);
  cartService = inject(CartService);

  product$: Observable<Product> = getParams().pipe(
    switchMap((id) => this.productSearchService.getById(id))
  );
}
