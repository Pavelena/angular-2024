import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleType } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private url = "https://midaiganes.irw.ee/api/list?limit=500";

  urlRequest(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  constructor(
    private http: HttpClient
  ) { }
}
