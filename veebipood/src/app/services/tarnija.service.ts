import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class TarnijaService {

  constructor(private http: HttpClient) { }

  saaTooted(): Observable<Product[]> {
    return this.http.get<Product[]>("https://fakestoreapi.com/products");
  }
}
