import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonRequestsService {

  marineRegionsData(){
    return this.http.get<any[]>("https://marineregions.org/rest/getGazetteerTypes.json");
  }

  productsListData() {
    return this.http.get<any[]>("https://api.escuelajs.co/api/v1/products");
  }

  constructor(private http: HttpClient) { }
}
