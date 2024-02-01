import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@ecommerce-mentoria-2/layout';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, LayoutModule],
  selector: 'ecommerce-mentoria-2-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ecommerce-mentoria-2';
}
