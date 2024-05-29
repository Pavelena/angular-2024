import { Injectable } from '@angular/core';
import { characterType } from '../models/characterType';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  favourites: characterType[] = [];

  constructor() { }

  getFromStorage(): characterType[] {
    return JSON.parse(localStorage.getItem("favourites") || "[]");
  }
  addToStorage(tegelane: characterType){
    const favouritesLS = JSON.parse(localStorage.getItem("favourites") || "[]"); //Enne v6tame storage-st
    favouritesLS.push(tegelane); //Lisame juurde
    localStorage.setItem("favourites", JSON.stringify(favouritesLS)); //Paneme k6ik tagasi
  }
  refreshStorage(characterArray: characterType[]){
    localStorage.setItem("favourites", JSON.stringify(characterArray));
  }
}
