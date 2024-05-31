import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OstukorviToode } from '../models/ostukorvi-toode';
import { Pakiautomaat } from '../models/pakiautomaat';
import { Toode } from '../models/toode';
import { PricePipe } from '../pipes/price.pipe';
import { OstukorvService } from '../services/ostukorv.service';
import { PakiautomaadidService } from '../services/pakiautomaadid.service';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-ostukorv',
  standalone: true,
  imports: [CommonModule, PricePipe],
  templateUrl: './ostukorv.component.html',
  styleUrl: './ostukorv.component.css'
})
export class OstukorvComponent {
 tooted = this.ostukorvService.saaOstukorv();
 pakiautomaadid: Pakiautomaat[] = [];

  constructor (
    private ostukorvService: OstukorvService,
    private pakiautomaadidService: PakiautomaadidService,
    private paymentService: PaymentService
  ){}

  ngOnInit() {
    this.pakiautomaadidService.saaPaakiautomaadid().subscribe(vastus => this.pakiautomaadid = vastus.filter(e => e.A0_NAME === "EE"))
  }

 tyhjenda() {
  this.tooted = [];
  this.ostukorvService.uuendaOstukorv(this.tooted);
 }

 vahendaKogus(index: number) {
  this.tooted[index].kogus--;
  if (this.tooted[index].kogus === 0) {
    this.tooted.splice(index,1);
  }
  this.ostukorvService.uuendaOstukorv(this.tooted);
 }
 suurendaKogus(index: number) {
  this.tooted[index].kogus++;
  this.ostukorvService.uuendaOstukorv(this.tooted);
 }

 kustuta(index: number){
  this.tooted.splice(index,1);
  this.ostukorvService.uuendaOstukorv(this.tooted);
 }
//  lisa(toode: OstukorviToode){
//   this.tooted.push(toode);
//   this.ostukorvService.uuendaOstukorv(this.tooted);
//  }
 kokku() {
  let sum = 0;
  this.tooted.forEach(t => sum += t.kogus * t.toode.hind);
  return sum.toFixed(2);
 }
 maksa() {
  this.paymentService.makse().subscribe(vastus => {
    console.log(vastus);
    window.location.href = vastus.payment_link;
  })
 }
}
