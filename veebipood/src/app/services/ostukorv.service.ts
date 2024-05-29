import { Injectable } from '@angular/core';
import { OstukorviToode } from '../models/ostukorvi-toode';
import { Toode } from '../models/toode';

@Injectable({
  providedIn: 'root'
})
export class OstukorvService {
  // ostukorv: Toode[] = [];

  constructor() { }

  saaOstukorv(): OstukorviToode[] {
    return JSON.parse(localStorage.getItem("ostukorv") || "[]");
  }
  lisaOstukorvi(lisatavToode: Toode){
    const ostukorvLS: OstukorviToode[] = JSON.parse(localStorage.getItem("ostukorv") || "[]");
    const index = ostukorvLS.findIndex(t => t.toode.nimi === lisatavToode.nimi);

    if (index >= 0) {
      ostukorvLS[index].kogus++;
    } else {
      ostukorvLS.push({kogus: 1, toode: lisatavToode});
    }
    localStorage.setItem("ostukorv", JSON.stringify(ostukorvLS));
  }
  uuendaOstukorv(tooted: OstukorviToode[]){
    localStorage.setItem("ostukorv", JSON.stringify(tooted));
  }
}
