import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoaderComponent } from '../components/loader/loader.component';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [ 
    RouterLink,
    LoaderComponent,
    CommonModule
  ],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss'
})
export class CountriesComponent {
  countries!: any[];
  isLoaded = false;

  constructor(
    private requestsService: RequestsService
  ) {}

  ngOnInit(): void {
    this.requestsService.requestCountries().subscribe(response => {
      this.countries = response.countries;
      this.isLoaded = true;
    })
  }
}
