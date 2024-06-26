import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AuthFormComponent } from '../auth-form.component';
import { AuthFormEmailComponent } from './auth-form-email.component';

describe('AuthFormEmailComponent', () => {
  let component: AuthFormEmailComponent;
  let fixture: ComponentFixture<AuthFormEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthFormEmailComponent, NoopAnimationsModule],
      providers: [AuthFormComponent, provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthFormEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enable button when control is valid', () => {
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBe(true);

    component.control.setValue('user@mail.com');
    fixture.detectChanges();

    expect(button.disabled).toBe(false);
  });

  it('should display required error message', () => {
    component.control.markAsTouched();
    fixture.detectChanges();
    const error: HTMLElement = fixture.nativeElement.querySelector(
      '[data-testid="error-required"]'
    );
    expect(error).toBeTruthy();
  });

  it('should display email error message', () => {
    // component.control.setValue('user');

    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    input.value = 'user';
    input.dispatchEvent(new Event('input'));

    component.control.markAsTouched();
    fixture.detectChanges();

    const error: HTMLElement = fixture.nativeElement.querySelector(
      '[data-testid="error-email"]'
    );
    expect(error).toBeTruthy();
  });
});
