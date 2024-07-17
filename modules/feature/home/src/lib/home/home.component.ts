import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RecommendedProductsService } from '@ecommerce-mentoria-2/product-data-access';
import { ProductCardComponent } from '@ecommerce-mentoria-2/product-ui';
import { LogDirective } from '../directives/log/log.directive';

@Component({
  selector: 'ecommerce-mentoria-2-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, LogDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products$ = this.recommendedProductsService.getProducts();

  constructor(private recommendedProductsService: RecommendedProductsService) {}
}
