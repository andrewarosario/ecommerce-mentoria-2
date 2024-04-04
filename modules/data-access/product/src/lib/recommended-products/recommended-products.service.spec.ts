import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { mockProducts } from '../mocks/product.mock';
import { Product } from '../models/product.model';
import { RecommendedProductsService } from './recommended-products.service';

describe('RecommendedProductsService', () => {
  let service: RecommendedProductsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RecommendedProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return recommended products correctly', () => {
    // Arrange
    const url = `${service.apiUrl}/products?page=1&limit=6`;
    let result: Product[] = [];

    // Act
    service.getProducts().subscribe((products) => (result = products));

    // Assert
    const request = httpMock.expectOne(url);
    request.flush(mockProducts);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(mockProducts);
  });
});
