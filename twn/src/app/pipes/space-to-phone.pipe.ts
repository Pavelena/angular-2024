import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceToPhone',
  standalone: true
})
export class SpaceToPhonePipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0,4) + " " + value.substring(4);
  }

}
