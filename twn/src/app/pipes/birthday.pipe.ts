import { ThisReceiver } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthday',
  standalone: true
})
export class BirthdayPipe implements PipeTransform {

  transform(value: number): string {
    const day = value.toString().substring(5,7);
    const month = value.toString().substring(3,5);
    
    return day + "." + month + "." + this.getYear(value);
  }
  getYear(value:number) {
    let year = value.toString().substring(1,3);
    const s = value.toString().substring(0,1);

    if (s === "4" || s === "3") {
      year = "19" + year;
    } 
    if (s === "5" || s === "6") {
      year = "20" + year;
    } 
    return year;
  }

  date(value: number): number {
    const day = value.toString().substring(5,7);
    const month = value.toString().substring(3,5);
    return new Date(month + "." + day + "." + this.getYear(value)).getTime();
  }

}
