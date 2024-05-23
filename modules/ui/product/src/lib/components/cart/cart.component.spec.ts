import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    component.quantity = 5;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render aria-label with quantity', () => {
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(button.getAttribute('aria-label')).toBe(
      'Carrinho de compras com 5 produtos'
    );
  });

  it('should render quantity', () => {
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(button.getAttribute('ng-reflect-content')).toBe('5');
  });
});
