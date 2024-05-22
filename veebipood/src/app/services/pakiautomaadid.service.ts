import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pakiautomaat } from '../models/pakiautomaat';

@Injectable({
  providedIn: 'root'
})
export class PakiautomaadidService {
  saaPaakiautomaadid(){
    return this.http.get<Pakiautomaat[]>("https://www.omniva.ee/locations.json");
  }

  constructor(private http: HttpClient) { }
}
