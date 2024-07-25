import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from '../components/loader/loader.component';
import { CountryType } from '../model/country';
import { SanitizerPipe } from '../pipes/sanitizer.pipe';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [ 
    CommonModule, 
    NgbPaginationModule,
    SanitizerPipe,
    RouterLink,
    LoaderComponent
  ],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
export class CountryComponent {
  country!: CountryType;
  participants: any[] = [];
  isLoaded = false;
  sortProperty!:string;
  direction = 1;
  page = 1;
  pageSize = 20;

  constructor(
    private route: ActivatedRoute,
    private requestsService: RequestsService
  ){}
  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    
    if (id === null){
      return;
    }

    this.requestsService.requestCountry(id).subscribe(response => {
      this.country = response.country;
      this.participants = response.country.participants;
      this.isLoaded = true;
    });
  }

  sort(property:string){
    
    this.direction = property === this.sortProperty ? (this.direction * -1) : 1;

    this.sortProperty = property;

    if (this.direction === 1) {
      this.participants.sort((a, b) => a[property] > b[property] ? 1 : a[property] < b[property] ? -1 : 0);
    } else {
      this.participants.sort((a, b) => a[property] < b[property] ? 1 : a[property] > b[property] ? -1 : 0);
    }
  }
}
