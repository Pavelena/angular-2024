import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from '../components/card/card.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-years',
  standalone: true,
  imports: [
    CommonModule,
    LoaderComponent,
    CardComponent,
    NgbPaginationModule
  ],
  templateUrl: './years.component.html',
  styleUrl: './years.component.scss'
})
export class YearsComponent implements OnInit {
  years!: any[];
  isLoaded = false;
  page = 1;
  pageSize = 24;

  constructor(
    private requestsService: RequestsService
  ) {}

  ngOnInit(): void {
    this.requestsService.requestYears().subscribe(response => {
      this.years = response.years;
      this.isLoaded = true;
    })
  }
}
