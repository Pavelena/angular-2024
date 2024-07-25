import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PricePipe } from '../pipes/price.pipe';
import { OstukorvService } from '../services/ostukorv.service';
import { PaymentService } from '../services/payment.service';
import { TotalSumService } from '../services/total-sum.service';
import { PakiautomaadidComponent } from './pakiautomaadid/pakiautomaadid.component';

@Component({
  selector: 'app-ostukorv',
  standalone: true,
  imports: [
    CommonModule, 
    PricePipe, 
    PakiautomaadidComponent
  ],
  templateUrl: './ostukorv.component.html',
  styleUrl: './ostukorv.component.css'
})
export class OstukorvComponent {
 tooted = this.ostukorvService.saaOstukorv();

  constructor (
    private ostukorvService: OstukorvService,
    private paymentService: PaymentService,
    private totalSumService: TotalSumService
  ){}

 tyhjenda() {
  this.tooted = [];
  this.ostukorvService.uuendaOstukorv(this.tooted);
  this.totalSumService.totalSum.next(this.kokku());
 }

 vahendaKogus(index: number) {
  this.tooted[index].kogus--;
  if (this.tooted[index].kogus === 0) {
    this.tooted.splice(index,1);
  }
  this.ostukorvService.uuendaOstukorv(this.tooted);
  this.totalSumService.totalSum.next(this.kokku());
 }
 suurendaKogus(index: number) {
  this.tooted[index].kogus++;
  this.ostukorvService.uuendaOstukorv(this.tooted);
  this.totalSumService.totalSum.next(this.kokku());
 }

 kustuta(index: number){
  this.tooted.splice(index,1);
  this.ostukorvService.uuendaOstukorv(this.tooted);
  this.totalSumService.totalSum.next(this.kokku());
 }
//  lisa(toode: OstukorviToode){
//   this.tooted.push(toode);
//   this.ostukorvService.uuendaOstukorv(this.tooted);
//  }
 kokku() {
  let sum = 0;
  this.tooted.forEach(t => sum += t.kogus * t.toode.hind);
  return sum;
 }
 maksa() {
  this.paymentService.makse(this.kokku().toFixed(2)).subscribe(vastus => {
    console.log(vastus);
    window.location.href = vastus.payment_link;
  })
 }
}
