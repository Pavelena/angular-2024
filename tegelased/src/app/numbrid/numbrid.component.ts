import { Component } from '@angular/core';

@Component({
  selector: 'app-numbrid',
  standalone: true,
  imports: [],
  templateUrl: './numbrid.component.html',
  styleUrl: './numbrid.component.css'
})
export class NumbridComponent {
  numbers = [4, 23, 7, 39, 19, 0, 9, 14, 135, 202, 54];

  numbersOriginal = this.numbers;

  sortAsc() {
    this.numbers.sort((a,b)=> a - b);
  }
  sortDesc() {
    this.numbers.sort((a,b)=> b - a);
  }
  sortAZ() {
    this.numbers.sort((a,b)=> a.toString().localeCompare(b.toString()));
  }
  sortZA() {
    this.numbers.sort((a,b)=> b.toString().localeCompare(a.toString()));
  }

  restore(){
    this.numbers = this.numbersOriginal;
  }

  filterBgThan8(){
    this.numbers = this.numbersOriginal;
    const result = this.numbers.filter(e => e > 8);
    this.numbers = result;
  }
  filterSmThan10() {
    this.numbers = this.numbersOriginal;
    const result = this.numbers.filter(e => e < 10);
    this.numbers = result;
  }
  filterEven() {
    this.numbers = this.numbersOriginal;
    const result = this.numbers.filter(e => e % 2 === 0);
    this.numbers = result;
  }
  filterOdd() {
    this.numbers = this.numbersOriginal;
    const result = this.numbers.filter(e => e % 2 === 1);
    this.numbers = result;
  }
  filterStartsWith1() {
    this.numbers = this.numbersOriginal;
    const result = this.numbers.filter(e => e.toString().startsWith('1'));
    this.numbers = result;
  }
  filterInclude3() {
    this.numbers = this.numbersOriginal;
    const result = this.numbers.filter(e => e.toString().includes('3'));
    this.numbers = result;
  }
}
