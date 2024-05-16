import { TestBed } from '@angular/core/testing';

import { mockProducts } from '../../mocks/product.mock';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add product to cart', () => {
    service.addToCart(mockProducts[0]);
    expect(service.quantity()).toBe(1);

    service.addToCart(mockProducts[1]);
    expect(service.quantity()).toBe(2);
  });
});
