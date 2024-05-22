import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class TarnijaService {

  constructor(private http: HttpClient) { }

  saaTooted() {
    return this.http.get<Product[]>("https://fakestoreapi.com/products");
  }
}
