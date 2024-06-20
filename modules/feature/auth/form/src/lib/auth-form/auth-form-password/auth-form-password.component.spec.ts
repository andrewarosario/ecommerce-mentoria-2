import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthFormComponent } from '../auth-form.component';
import { AuthFormPasswordComponent } from './auth-form-password.component';

describe('AuthFormPasswordComponent', () => {
  let component: AuthFormPasswordComponent;
  let fixture: ComponentFixture<AuthFormPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthFormPasswordComponent],
      providers: [AuthFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthFormPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
