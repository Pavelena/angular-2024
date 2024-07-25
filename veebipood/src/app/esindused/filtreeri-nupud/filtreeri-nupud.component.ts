import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-filtreeri-nupud',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './filtreeri-nupud.component.html',
  styleUrl: './filtreeri-nupud.component.css'
})
export class FiltreeriNupudComponent {
  @Input("poed") esindused!: {[key:string]:string[]};
  @Input() aktiivneLinn!: string;

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
}
