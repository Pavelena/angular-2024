import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Toode } from '../models/toode';

@Injectable({
  providedIn: 'root'
})
export class ToodeService {
  // tooted: Toode[] = [
  //   {"nimi": "Coca", "hind": 3, "aktiivne": true, "pilt": "https://www.cokesolutions.com/content/cokesolutions/site/us/en/products/brands/coca-cola/coca-cola.main-image.290-417.png"}, 
  //   {"nimi": "Fanta", "hind": 2, "aktiivne": false, "pilt": "https://www.bigbasket.com/media/uploads/p/xxl/251041_9-fanta-soft-drink-orange-flavoured.jpg"},
  //   {"nimi": "Sprite", "hind": 2.5, "aktiivne": true, "pilt": "https://www.coca-cola.com/content/dam/onexp/gb/en/product/sprite-low-cal-02.png"}
  // ]
  private url = "https://elena-veebipood-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  
  constructor(private http: HttpClient) { }

  saaTooted(): Observable<Toode[]> {
    return this.http.get<Toode[]>(this.url);
  }
  uuendaTooted(tooted: Toode[]): Observable<Toode[]> {
    return this.http.put<Toode[]>(this.url, tooted);
  }
}
