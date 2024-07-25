import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortener',
  standalone: true
})
export class ShortenerPipe implements PipeTransform {

  transform(value: string, chars: number): string {
    return value.length > chars ? value.substring(0,chars) + "..." : value;
  }

}
