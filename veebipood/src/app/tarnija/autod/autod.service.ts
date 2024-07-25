import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutoResponse } from './auto-response';

@Injectable({
  providedIn: 'root'
})
export class AutodService {
  url = "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=100";

  saaAutod(){
    return this.http.get<AutoResponse>(this.url);
  }
  constructor( private http: HttpClient) { }
}
