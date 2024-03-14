import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  ProductSearchService,
  mockProducts,
} from '@ecommerce-mentoria-2/product-data-access';
import { of } from 'rxjs';
import { ProductSearchComponent } from './product-search.component';

describe('ProductSearchComponent', () => {
  let component: ProductSearchComponent;
  let fixture: ComponentFixture<ProductSearchComponent>;
  let productSearchService: ProductSearchService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSearchComponent, NoopAnimationsModule],
      providers: [
        {
          provide: ProductSearchService, // QUANDO O COMPONENTE VISUALIZAR ESSE SERVICE
          useValue: { searchByName: () => of(mockProducts) }, // NA VERDADE ELE VAI UTILIZAR ESSA IMPLEMENTAÇÃO
        },
      ],
    }).compileComponents();

    productSearchService = TestBed.inject(ProductSearchService);
    fixture = TestBed.createComponent(ProductSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should debounce when input field is changed', fakeAsync(() => {
    jest.spyOn(productSearchService, 'searchByName');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    input.value = 'tv';
    input.dispatchEvent(new Event('input'));

    expect(productSearchService.searchByName).not.toHaveBeenCalled();

    tick(500);

    expect(productSearchService.searchByName).toHaveBeenCalledWith(input.value);
  }));

  it('should search multiple times', fakeAsync(() => {
    jest.spyOn(productSearchService, 'searchByName');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    input.value = 'tv';
    input.dispatchEvent(new Event('input'));

    tick(500);

    input.value = 'notebook';
    input.dispatchEvent(new Event('input'));

    tick(500);

    expect(productSearchService.searchByName).toHaveBeenCalledTimes(2);
  }));

  it('should prevent identical submissions', fakeAsync(() => {
    jest.spyOn(productSearchService, 'searchByName');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    input.value = 'tv';
    input.dispatchEvent(new Event('input'));

    tick(500);

    input.value = 'tv';
    input.dispatchEvent(new Event('input'));

    tick(500);

    expect(productSearchService.searchByName).toHaveBeenCalledTimes(1);
  }));

  it('should prevent empty submissions', fakeAsync(() => {
    jest.spyOn(productSearchService, 'searchByName');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    input.value = '';
    input.dispatchEvent(new Event('input'));

    tick(500);

    expect(productSearchService.searchByName).not.toHaveBeenCalled();
  }));

  it('should return products observable correctly', () => {
    component.products$.subscribe((products) => {
      expect(products).toEqual(mockProducts);
    });
  });
});
