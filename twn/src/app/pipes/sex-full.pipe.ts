import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexFull',
  standalone: true
})
export class SexFullPipe implements PipeTransform {

  transform(value: string): string {
    return (value === "m")? "Mees": "Naine";
  }

}
