import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EsindusService } from '../services/esindus.service';

@Component({
  selector: 'app-yks-esindus',
  standalone: true,
  imports: [],
  templateUrl: './yks-esindus.component.html',
  styleUrl: './yks-esindus.component.css'
})
export class YksEsindusComponent implements OnInit {
  esindus: string = "";
  

  //failide sidumiseks
  constructor( 
    private esindusService: EsindusService,
    private activatedRoute: ActivatedRoute
  ){}

  //kui komponendi peale minnakse
  ngOnInit(): void {
    const linn = this.activatedRoute.snapshot.paramMap.get("linn");
    const index = this.activatedRoute.snapshot.paramMap.get("index");
    if (linn === null || index === null){
      return;
    }
    const esindused = this.esindusService.esindused;
    this.esindus = esindused[linn][Number(index)];
  }
}
