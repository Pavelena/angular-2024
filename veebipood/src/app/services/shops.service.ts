import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shop } from '../models/shop';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {
  private url = "https://elena-veebipood-default-rtdb.europe-west1.firebasedatabase.app/shops.json";
  constructor( private http: HttpClient) { }

  shopsRequest(): Observable<shop[]> {
    return this.http.get<shop[]>(this.url);
  }
  shopsRefresh(tooted: shop[]): Observable<shop[]> {
    return this.http.put<shop[]>(this.url, tooted);
  }
}
