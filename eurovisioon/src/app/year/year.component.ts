import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from '../components/loader/loader.component';
import { PerformerCardComponent } from '../components/performer-card/performer-card.component';
import { ContestType } from '../model/contest';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-year',
  standalone: true,
  imports: [
    LoaderComponent,
    CommonModule,
    NgbNavModule,
    PerformerCardComponent
  ],
  templateUrl: './year.component.html',
  styleUrl: './year.component.scss'
})
export class YearComponent implements OnInit {
  isLoaded = false;
  contest!: ContestType;

  constructor(
    private route: ActivatedRoute,
    private requestsService: RequestsService
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.params["year"];
    
    if (id === null){
      return;
    }

    this.requestsService.requestYear(id).subscribe(response => {
      this.contest = response.year;
      this.isLoaded = true;
    });
  }
}
