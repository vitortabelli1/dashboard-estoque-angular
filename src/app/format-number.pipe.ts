import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: number): string {
    if (value >= 1_000_000) {
      return (value / 1_000_000).toFixed(1) + ' mi';
    } else if (value >= 1_000) {
      return (value / 1_000).toFixed(1) + ' mil';
    } else {
      return value.toString();
    }
  }
}
