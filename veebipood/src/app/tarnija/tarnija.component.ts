import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoaderComponent } from '../components/loader/loader.component';
import { TarnijaService } from '../services/tarnija.service';
import { Product } from '../models/product';
import { ShortenerPipe } from '../pipes/shortener.pipe';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tarnija',
  standalone: true,
  imports: [LoaderComponent, CommonModule, ShortenerPipe, NgbPaginationModule],
  templateUrl: './tarnija.component.html',
  styleUrl: './tarnija.component.css'
})
export class TarnijaComponent {
  tooted: Product[] = [];
  isLoading = true;
  page = 1;
  pageSize = 3;

  constructor(private tarnijaService: TarnijaService){}

  ngOnInit() {
    this.tarnijaService.saaTooted()
    .subscribe(vastus => {
      this.tooted = vastus;
      this.isLoading = false;
    });
  }
}
