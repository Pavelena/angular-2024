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
  addToStorage(lisatavLemmik: characterType){
    const favouritesLS: characterType[] = JSON.parse(localStorage.getItem("favourites") || "[]"); //Enne v6tame storage-st
    const index = favouritesLS.findIndex(f => f.first === lisatavLemmik.first);
    if (index < 0) {
      favouritesLS.push(lisatavLemmik);
    }

    localStorage.setItem("favourites", JSON.stringify(favouritesLS)); //Paneme k6ik tagasi
  }
  refreshStorage(characterArray: characterType[]){
    localStorage.setItem("favourites", JSON.stringify(characterArray));
  }
}
