import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private url = "https://elena-veebipood-default-rtdb.europe-west1.firebasedatabase.app/images.json";
  constructor( private http: HttpClient) { }

  imagesRequest(): Observable<image[]> {
    return this.http.get<image[]>(this.url);
  }
  imagesRefresh(tooted: image[]): Observable<image[]> {
    return this.http.put<image[]>(this.url, tooted);
  }
}
