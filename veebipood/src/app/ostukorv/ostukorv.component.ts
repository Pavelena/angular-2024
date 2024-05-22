import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pakiautomaat } from '../models/pakiautomaat';
import { Toode } from '../models/toode';
import { OstukorvService } from '../services/ostukorv.service';
import { PakiautomaadidService } from '../services/pakiautomaadid.service';

@Component({
  selector: 'app-ostukorv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ostukorv.component.html',
  styleUrl: './ostukorv.component.css'
})
export class OstukorvComponent {
 tooted = this.ostukorvService.saaOstukorv();
 pakiautomaadid: Pakiautomaat[] = [];

  constructor (
    private ostukorvService: OstukorvService,
    private pakiautomaadidService: PakiautomaadidService
  ){}

  ngOnInit() {
    this.pakiautomaadidService.saaPaakiautomaadid().subscribe(vastus => this.pakiautomaadid = vastus.filter(e => e.A0_NAME === "EE"))
  }

 tyhjenda() {
  this.tooted = [];
  this.ostukorvService.uuendaOstukorv(this.tooted);
 }
 kustuta(index: number){
  this.tooted.splice(index,1);
  this.ostukorvService.uuendaOstukorv(this.tooted);
 }
 lisa(toode: Toode){
  this.tooted.push(toode);
  this.ostukorvService.uuendaOstukorv(this.tooted);
 }
 kokku() {
  let sum = 0;
  this.tooted.forEach(t => sum +=t.hind);
  return sum;
 }
}
