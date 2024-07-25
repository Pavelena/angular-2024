import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WinnerType } from '../model/winner';
import { RequestsService } from '../services/requests.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from '../components/loader/loader.component';
import { PerformerCardComponent } from '../components/performer-card/performer-card.component';

@Component({
  selector: 'app-winners',
  standalone: true,
  imports: [
    CommonModule,
    NgbPaginationModule,
    FormsModule,
    LoaderComponent,
    PerformerCardComponent
  ],
  templateUrl: './winners.component.html',
  styleUrl: './winners.component.scss'
})
export class WinnersComponent implements OnInit {
  isLoaded = false;
  winners!: WinnerType[];
  winnersOrig!: WinnerType[];

  //Filter variables
  country: string = "";
  countries:string[] = [];
  year: string = "";
  years:number[] = [];

  page = 1;
  pageSize = 24;

  constructor(
    private requestsService: RequestsService
  ) {}

  ngOnInit(): void {
    this.requestsService.requestWinners().subscribe(response => {
      this.winners = response.winners;
      this.winnersOrig = response.winners.slice();
      this.isLoaded = true;

      this.winnersOrig.forEach(y => {
        if(this.years.indexOf(y.year) === -1){
          this.years.push(y.year);
        }
      });

      this.winnersOrig.forEach(c => {
        if(this.countries.indexOf(c.country_name) === -1){
          this.countries.push(c.country_name);
          this.countries.sort((a,b) => a.localeCompare(b));
        }
      });
    })
  }

  filterByYear(){
      this.country = "";
      if(this.year === "") {
        this.winners = this.winnersOrig;
      } else {
        this.winners = this.winnersOrig;
        this.page = 1;
        const result = this.winners.filter(e => e.year === parseInt(this.year));
        this.winners = result;
      }
  }
  filterByCountry(){
      this.year = "";
      if(this.country === "") {
        this.winners = this.winnersOrig;
      } else {
        this.winners = this.winnersOrig;
        this.page = 1;
        const result = this.winners.filter(e => e.country_name === this.country);
        this.winners = result;
      }
  }
}
