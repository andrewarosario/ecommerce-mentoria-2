import { Component, inject } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@ecommerce-mentoria-2/layout';
import { CartService } from '@ecommerce-mentoria-2/product-data-access';
import { ProductSearchComponent } from '@ecommerce-mentoria-2/product-search';
import { CartComponent } from '@ecommerce-mentoria-2/product-ui';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    LayoutModule,
    ProductSearchComponent,
    MatSnackBarModule,
    CartComponent,
  ],
  selector: 'ecommerce-mentoria-2-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  quantity = inject(CartService).quantity;
}
