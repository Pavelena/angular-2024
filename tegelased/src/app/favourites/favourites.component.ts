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
  favourites = this.favouritesService.getFromStorage();

  tyhjenda() {
    this.favourites = [];
    this.favouritesService.refreshStorage(this.favourites);
  }
  kustuta(index: number) {
    this.favourites.splice(index, 1);
    this.favouritesService.refreshStorage(this.favourites);
  }

 constructor(
  private favouritesService: FavouritesService
 ){}
}
