import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sorteeri-nupud',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './sorteeri-nupud.component.html',
  styleUrl: './sorteeri-nupud.component.css'
})
export class SorteeriNupudComponent {
  @Input("poed") esindused!: {[key:string]:string[]};
  @Input() aktiivneLinn!: string;

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
}
