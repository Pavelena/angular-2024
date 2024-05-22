import { Injectable } from '@angular/core';
import { characterType } from '../models/characterType';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  favourites: characterType[] = [];

  constructor() { }
}
