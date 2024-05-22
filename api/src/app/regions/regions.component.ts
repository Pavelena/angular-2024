import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonRequestsService } from '../services/json-requests.service';

@Component({
  selector: 'app-regions',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './regions.component.html',
  styleUrl: './regions.component.css'
})
export class RegionsComponent {
  constructor (
    private jsonRequestService: JsonRequestsService
  ){}

  marineRegions: any[] = [];
  marineRegionsOriginal: any[] = [];
  submitted = false;
  
  keyword = '';

  ngOnInit() {
    this.jsonRequestService.marineRegionsData().subscribe(vastus => this.marineRegions = vastus);
    this.marineRegionsOriginal = this.marineRegions;
  }
  filterbyType(){
    this.submitted = true;
    const result = this.marineRegions.filter(e => e.type.includes(this.keyword));
    this.marineRegions = result;
  }
  restore(){
    this.submitted = false;
    this.marineRegions = this.marineRegionsOriginal;
  }
}
