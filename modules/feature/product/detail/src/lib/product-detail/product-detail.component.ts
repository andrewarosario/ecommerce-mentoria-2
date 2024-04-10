import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { getParams } from './get-params';

@Component({
  selector: 'ecommerce-mentoria-2-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  id$ = getParams();
}
