import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat'
})
export class PriceFormatPipe implements PipeTransform {
  transform(price: number, currencySymbol: string = '$', decimalPlaces: number = 2): string {
    return `${currencySymbol}${price.toFixed(decimalPlaces)}`;
  }
}
