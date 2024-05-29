import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class CharactersComponent implements OnInit {
  constructor( 
    private charactersService: CharactersService,
    private favouritesService: FavouritesService
    ) { }
  
  tegelased: characterType[] = [];
  isFavourite = false;
  keyword = '';

  ngOnInit(): void {
    this.charactersService.dbRequest().subscribe(vastus => this.tegelased = vastus);
  }

  searchbyName() {
    const result = this.tegelased.filter(e => e.first.toLowerCase().includes(this.keyword.toLowerCase()));
    this.tegelased = result;
  }

  // loveIt(tegelane: characterType) {
  //   let index = this.favouritesService.favourites.findIndex(f => f.first === tegelane.first);

  //   if( index === -1) {
  //     this.favouritesService.favourites.push(tegelane);
  //     this.isFavourite = true;
  //   } else {
  //     this.isFavourite = false;
  //     this.favouritesService.favourites.splice(index, 1);
  //   }
  // }
  loveIt(tegelane: characterType) {
    const index = this.favouritesService.favourites.findIndex(f => f.first === tegelane.first);
    console.log(index);
    if( index === -1) {
      this.favouritesService.addToStorage(tegelane);
    }
  }
  
}
