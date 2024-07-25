import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShipmentsType } from './shipments';

@Injectable({
  providedIn: 'root'
})
export class ShipmentTabelService {

  private url = "https://my.api.mockaroo.com/shipments.json?key=5e0b62d0";

  getShipments(): Observable<ShipmentsType[]> {
    return this.http.get<ShipmentsType[]>(this.url);
  }

  constructor( private http: HttpClient) { }
}
