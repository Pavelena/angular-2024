import { Component } from '@angular/core';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { EsindusService } from '../services/esindus.service';
import { FiltreeriNupudComponent } from './filtreeri-nupud/filtreeri-nupud.component';
import { SorteeriNupudComponent } from './sorteeri-nupud/sorteeri-nupud.component';

@Component({
  selector: 'app-esindused',
  standalone: true,
  imports: [RouterLink, TranslateModule, SorteeriNupudComponent, FiltreeriNupudComponent],
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
  
  tahedKokku(){
    let summa = 0;
    this.esindused[this.aktiivneLinn].forEach(e => summa = summa + e.length)
    return summa;
  }
}
