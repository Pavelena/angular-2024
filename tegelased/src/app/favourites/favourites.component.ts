import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FavouritesService } from '../services/favourites.service';

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent {
  favourites = this.favouritesService.favourites;

  tyhjenda() {
    this.favourites = [];
  }
  kustuta(index: number) {
    this.favourites.splice(index, 1);
  }

 constructor(
  private favouritesService: FavouritesService
 ){}
}
