import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { characterType } from '../models/characterType';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CharactersService } from '../services/characters.service';
import { FavouritesService } from '../services/favourites.service';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, NotFoundComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {
  constructor( 
    private charactersService: CharactersService,
    private favouritesService: FavouritesService
    ) { }
  
  tegelased = this.charactersService.characterArray;
  isFavourite = false;
  keyword = '';

  searchbyName() {
    const result = this.charactersService.characterArray.filter(e => e.first.toLowerCase().includes(this.keyword.toLowerCase()));
    this.tegelased = result;
  }

  loveIt(tegelane: characterType) {
    let index = this.favouritesService.favourites.findIndex(f => f.first === tegelane.first);
    console.log(index);
    if( index === -1) {
      this.favouritesService.favourites.push(tegelane);
      this.isFavourite = true;
    } else {
      this.isFavourite = false;
      this.favouritesService.favourites.splice(index, 1);
    }

    // this.favouritesService.favourites.forEach(f => {
    //   if ( f.first === tegelane.first) {
    //     this.isFavourite = true;
    //   }
    // })
    
    // if (!this.isFavourite) {
    //   this.favouritesService.favourites.push(tegelane);
    // }
  }

}
