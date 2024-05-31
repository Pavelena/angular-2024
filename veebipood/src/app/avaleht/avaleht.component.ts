import { DatePipe, JsonPipe, PercentPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarouselComponent } from '../carousel/carousel.component';
import { Toode } from '../models/toode';
import { PricePipe } from '../pipes/price.pipe';
import { ShortenerPipe } from '../pipes/shortener.pipe';
import { OstukorvService } from '../services/ostukorv.service';
import { ToodeService } from '../services/toode.service';

@Component({
  selector: 'app-avaleht',
  standalone: true,
  imports: [RouterLink,CarouselComponent, ShortenerPipe, PricePipe, DatePipe, PercentPipe, JsonPipe],
  templateUrl: './avaleht.component.html',
  styleUrl: './avaleht.component.css'
})
export class AvalehtComponent implements OnInit {
  tooted: Toode[] = [];
  kuupaev = new Date();

  constructor(
    private toastr: ToastrService,
    private toodeService: ToodeService,
    private ostukorvService: OstukorvService
    ) {}

    ngOnInit(): void {
      this.toodeService.saaTooted().subscribe(vastus => this.tooted = vastus);
    }

    lisaOstukorvi(toode: Toode) {
      // this.ostukorvService.ostukorv.push(toode);
      this.ostukorvService.lisaOstukorvi(toode);
      this.toastr.success('Ostukorvi lisatud', toode.nimi,{
        timeOut: 3000,
        closeButton: true,
        positionClass: "toast-bottom-right"
      });
    }
}
