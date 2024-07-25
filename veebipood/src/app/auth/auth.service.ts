import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { FirebaseError } from './firebase-error';
import { FirebaseResponse } from './firebase-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 loggedin = new BehaviorSubject(sessionStorage.getItem("token")==="123");
 
 private signpUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + environment.firebase_api_key;
 private loginUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + environment.firebase_api_key;

  constructor(
    private http: HttpClient
  ) { }

  
  signup(email:string, password: string){
    const payload = {
      email: email,
      password: password,
      returnSecureToken: true
    }
    const headers = {
      "Content-Type": "application/json"
    };
    return this.http.post<FirebaseResponse>(this.signpUrl,payload,{headers: headers});
  }

  login(email:string, password: string) {
    const payload = {
      email: email,
      password: password,
      returnSecureToken: true
    }
    const headers = {
      "Content-Type": "application/json"
    };
    return this.http.post<FirebaseResponse>(this.loginUrl,payload,{headers: headers});
  }
}
