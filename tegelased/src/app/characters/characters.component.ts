import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { characterType } from '../models/characterType';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CharactersService } from '../services/characters.service';
import { FavouritesService } from '../services/favourites.service';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    RouterLink, 
    FormsModule, 
    CommonModule, 
    NotFoundComponent, 
    TranslateModule
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {
  constructor( 
    private charactersService: CharactersService,
    private favouritesService: FavouritesService
    ) { }
  
  tegelased: characterType[] = [];
  keyword = '';

  ngOnInit(): void {
    this.charactersService.dbRequest().subscribe(vastus => this.tegelased = vastus);
  }

  searchbyName() {
    const result = this.tegelased.filter(e => e.first.toLowerCase().includes(this.keyword.toLowerCase()));
    this.tegelased = result;
  }

  loveIt(tegelane: characterType) {
    this.favouritesService.addToStorage(tegelane);
  }
  
}
