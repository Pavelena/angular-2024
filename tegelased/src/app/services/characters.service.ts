import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { characterType } from '../models/characterType';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  // characterArray: characterType[] = [
  //   {"first": "Mickey", "last": "Mouse", "home":"Disneyland", "image": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Mickey_Mouse_%28poster_version%29.svg"},
  //   {"first": "Minnie", "last": "Mouse", "home":"Disneyland", "image": "https://static.wikia.nocookie.net/speedstorm/images/2/28/Minnie_Disney.png"},
  //   {"first": "Winnie", "last": "Pooh", "home":"Hundred Acre Wood", "image": "https://static.wikia.nocookie.net/certwo/images/8/84/Winnie-the-Pooh.png"},
  //   {"first": "Roo", "last": "Kangaroo", "home":"Hundred Acre Wood", "image":"https://static.wikia.nocookie.net/barbie-girls/images/2/27/Roo.png"},
  //   {"first": "Scooby", "last": "Doo", "home":"Crystal Cove", "image": "https://static.wikia.nocookie.net/love-exalted/images/5/53/Scooby-Doo.png"},
  //   {"first": "Alice", "last": "Carroll", "home":"Wonderland", "image": "https://static.wikia.nocookie.net/aliceinwonderland/images/1/15/Alice_%28Disney%29.jpg"},
  //   {"first": "Rapunzel", "last": "Princess", "home": "Kingdom of Corona", "image": "https://upload.wikimedia.org/wikipedia/en/6/6a/Rapunzel_tangled.png"},
  //   {"first": "Elsa", "last": "Snow Queen", "home":"Arendelle", "image": "https://upload.wikimedia.org/wikipedia/en/5/5e/Elsa_from_Disney%27s_Frozen.png"}
  // ];

  private url ="https://elena-characters-default-rtdb.europe-west1.firebasedatabase.app/tegelased.json";

  constructor( private http: HttpClient) { }

  dbRequest(): Observable<characterType[]> {
    return this.http.get<characterType[]>(this.url);
  }

  dbRefresh(tegelased: characterType[]): Observable<characterType[]> {
    return this.http.put<characterType[]>(this.url, tegelased);
  }

  

}
