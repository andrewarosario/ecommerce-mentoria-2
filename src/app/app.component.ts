import { Component } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@ecommerce-mentoria-2/layout';
import { ProductSearchComponent } from '@ecommerce-mentoria-2/product-search';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    LayoutModule,
    ProductSearchComponent,
    MatSnackBarModule,
  ],
  selector: 'ecommerce-mentoria-2-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ecommerce-mentoria-2';
}
