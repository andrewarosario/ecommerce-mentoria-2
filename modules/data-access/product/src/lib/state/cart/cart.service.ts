import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // FORMA COM OBSERVABLES
  // private cartSubject$ = new BehaviorSubject<Product[]>([]);
  // cart$ = this.cartSubject$.asObservable();
  // quantity$ = this.cart$.pipe(
  //   map(products => products.length)
  // );

  // addToCart(product: Product) {
  //   const currentCart = this.cartSubject$.getValue();
  //   this.cartSubject$.next([...currentCart, product]);
  // }

  // FORMA COM SIGNALS
  private cartSignal = signal<Product[]>([]);
  cart = this.cartSignal.asReadonly();
  quantity = computed(() => this.cart().length);

  addToCart(product: Product): void {
    this.cartSignal.update((products) => [...products, product]);
  }
}
