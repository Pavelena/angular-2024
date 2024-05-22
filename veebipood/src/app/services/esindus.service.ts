import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EsindusService {
  esindused:{[key:string]:string[]} = {
    "tallinn":["Ylemiste","Rocca","Magistrali","Vesse","Kristiine","J2rveotsa"],
    "tartu": ["Raatuse","L6unakeskus"],
    "narva": ["Fama"],
    "parnu": ["Port Artur 2"]
  };
  constructor() { }
}
