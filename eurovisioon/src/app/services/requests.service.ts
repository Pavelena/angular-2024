import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private winnersUrl = "https://www.eurovisioon.ee/api/voitjad.php";

  private countriesUrl = "https://www.eurovisioon.ee/api/riigid.php";
  private countryUrl = "https://www.eurovisioon.ee/api/riigid.php?id=";

  private homepageUrl = "https://www.eurovisioon.ee/api/index.php";

  private videosUrl = "https://www.eurovisioon.ee/api/videod.php";

  private yearsUrl = "https://www.eurovisioon.ee/api/aastad.php";
  private yearUrl = "https://www.eurovisioon.ee/api/aastad.php?id=";

  requestWinners(): Observable<any> {
    return this.http.get<any>(this.winnersUrl);
  }
  requestCountries(): Observable<any> {
    return this.http.get<any>(this.countriesUrl);
  }
  requestCountry(id:string): Observable<any> {
    return this.http.get<any>(this.countryUrl+id);
  }
  requestHomepage(): Observable<any> {
    return this.http.get<any>(this.homepageUrl);
  }
  requestVideos(): Observable<any> {
    return this.http.get<any>(this.videosUrl);
  }
  requestYears(): Observable<any> {
    return this.http.get<any>(this.yearsUrl);
  }

  requestYear(year:string): Observable<any> {
    return this.http.get<any>(this.yearUrl+year);
  }

  constructor( private http:HttpClient) { }
}
