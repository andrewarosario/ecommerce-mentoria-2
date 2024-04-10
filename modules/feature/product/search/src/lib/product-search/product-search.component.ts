import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ProductSearchService } from '@ecommerce-mentoria-2/product-data-access';
import { Product } from 'modules/data-access/product/src/lib/models/product.model';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'ecommerce-mentoria-2-product-search',
  standalone: true,
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss',
})
export class ProductSearchComponent implements OnInit {
  control = new FormControl('', { nonNullable: true });
  products$!: Observable<Product[]>;

  constructor(private productSearchService: ProductSearchService) {}

  ngOnInit() {
    this.products$ = this.control.valueChanges.pipe(
      // BORA UTILIZAR OS OPERADORES
      debounceTime(500),
      distinctUntilChanged(),
      filter((text) => text.length > 0),
      switchMap((text) => this.productSearchService.searchByName(text))
    );
  }
}
