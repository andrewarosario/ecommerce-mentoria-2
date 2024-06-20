import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthFormComponent } from '../auth-form.component';

@Component({
  selector: 'ecommerce-mentoria-2-auth-form-password',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-form-password.component.html',
  styleUrl: './auth-form-password.component.scss',
})
export class AuthFormPasswordComponent {
  control = inject(AuthFormComponent).form.controls.password;
}
