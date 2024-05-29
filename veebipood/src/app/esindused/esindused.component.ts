import { Component } from '@angular/core';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { EsindusService } from '../services/esindus.service';

@Component({
  selector: 'app-esindused',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './esindused.component.html',
  styleUrl: './esindused.component.css'
})
export class EsindusedComponent {
  aktiivneLinn = "tallinn";
  esindused:{[key:string]:string[]} = this.esindusService.esindused;

  constructor( private esindusService: EsindusService){}
  
  muudaLinn(uusLinn: string){
    this.aktiivneLinn = uusLinn;
  }
  sorteeriAZ() {
    this.esindused[this.aktiivneLinn].sort((a,b)=> a.localeCompare(b));
  }
  sorteeriZA() {
    this.esindused[this.aktiivneLinn].sort((a,b)=> b.localeCompare(a));
  }
  sorteeriTahedKasv() {
    this.esindused[this.aktiivneLinn].sort((a,b)=> a.length - b.length);
  }
  sorteeriTahedKah() {
    this.esindused[this.aktiivneLinn].sort((a,b)=> b.length - a.length);
  }
  sorteeriKolmasTahtAZ() {
    this.esindused[this.aktiivneLinn].sort((a,b)=> a[2].localeCompare(b[2]));
  }

  filterEndsWithE() {
    const result = this.esindused[this.aktiivneLinn].filter(e => e.endsWith('e'));
    this.esindused[this.aktiivneLinn]= result;
  }
  filterKellelOn9tathe() {
    const result = this.esindused[this.aktiivneLinn].filter(e => e.length === 9);
    this.esindused[this.aktiivneLinn]= result;
  }
  filterKellelOnVah7Tahte() {
    const result = this.esindused[this.aktiivneLinn].filter(e => e.length >= 7);
    this.esindused[this.aktiivneLinn]= result;
  }
  filterKesSisaldabIsLyhendit() {
    const result = this.esindused[this.aktiivneLinn].filter(e => e.includes("is"));
    this.esindused[this.aktiivneLinn]= result;
  }
  filterKellelOnKolmasTahtI() {
    const result = this.esindused[this.aktiivneLinn].filter(e => e[2]==="i");
    this.esindused[this.aktiivneLinn]= result;
  }
  tahedKokku(){
    let summa = 0;
    this.esindused[this.aktiivneLinn].forEach(e => summa = summa + e.length)
    return summa;
  }
}
