import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pageCenter',
  standalone: true
})
export class PageCenterPipe implements PipeTransform {

  transform(value: number[], activePage:number): number[] {
    if (activePage === 1 || activePage === 2){
      return value.slice(0,5);
    }
    if (activePage === value[value.length-1] || activePage === value[value.length-2]){
      return value.slice(value[value.length-6],value[value.length-1]);
    }
    return value.slice(activePage-3,activePage+2);
  }

}
