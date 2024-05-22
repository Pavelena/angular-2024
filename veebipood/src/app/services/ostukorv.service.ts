import { Injectable } from '@angular/core';
import { Toode } from '../models/toode';

@Injectable({
  providedIn: 'root'
})
export class OstukorvService {
  // ostukorv: Toode[] = [];

  constructor() { }

  saaOstukorv(): Toode[] {
    return JSON.parse(localStorage.getItem("ostukorv") || "[]");
  }
  lisaOstukorvi(toode: Toode){
    const ostukorvLS = JSON.parse(localStorage.getItem("ostukorv") || "[]");
    ostukorvLS.push(toode);
    localStorage.setItem("ostukorv", JSON.stringify(ostukorvLS));
  }
  uuendaOstukorv(tooted: Toode[]){
    localStorage.setItem("ostukorv", JSON.stringify(tooted));
  }
}
