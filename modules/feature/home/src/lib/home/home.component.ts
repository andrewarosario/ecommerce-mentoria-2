import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { mockProducts } from '@ecommerce-mentoria-2/product-data-access';

@Component({
  selector: 'ecommerce-mentoria-2-home',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products = mockProducts;
}
