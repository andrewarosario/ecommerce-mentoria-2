import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthFormComponent } from '../auth-form.component';

@Component({
  selector: 'ecommerce-mentoria-2-auth-form-email',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-form-email.component.html',
  styleUrl: './auth-form-email.component.scss',
})
export class AuthFormEmailComponent {
  control = inject(AuthFormComponent).form.controls.email;
}
