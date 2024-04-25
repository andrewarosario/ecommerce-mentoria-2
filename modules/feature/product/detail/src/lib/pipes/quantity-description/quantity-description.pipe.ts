import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantityDescription',
  standalone: true,
})
export class QuantityDescriptionPipe implements PipeTransform {
  transform(quantity: number): string {
    if (quantity === 0) {
      return 'Produto indisponível';
    }
    if (quantity === 1) {
      return 'Última unidade';
    }
    return `${quantity} unidades disponíveis`;
  }
}
