import { Component, Input } from '@angular/core';

@Component({
  selector: 'ecommerce-mentoria-2-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input({ required: true }) title = '';
}
