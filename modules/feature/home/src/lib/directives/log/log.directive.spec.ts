import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { mockProducts } from '@ecommerce-mentoria-2/product-data-access';
import { ProductCardComponent } from '@ecommerce-mentoria-2/product-ui';
import { LogDirective } from './log.directive';

@Component({
  template: `
    <ecommerce-mentoria-2-product-card
      ecommerceMentoria2Log
      [product]="product"
    ></ecommerce-mentoria-2-product-card>
  `,
})
class HostComponent {
  product = mockProducts[0];
}

describe('LogDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [LogDirective, ProductCardComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should have cursor pointer', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    const card: HTMLElement = fixture.nativeElement.querySelector(
      'ecommerce-mentoria-2-product-card'
    );
    expect(card.style.cursor).toBe('pointer');
  });
});
