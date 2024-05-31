import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }
  makse(): Observable <any> {
    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    const body = {
        "account_name": "EUR3D1",
        "nonce": "rr4" + new Date() + Math.random() * 99999,
        "timestamp": new Date(),
        "amount": 14,
        "order_reference": Math.random() * 99999,
        "customer_url": "https://elena-veebipood.web.app/",
        "api_username": environment.everypay.username
    };
    const headers = {
      "Authorization": environment.everypay.authorization,
      "Content-Type": "application/json"
    };
    return this.http.post<any>(url, body, {headers: headers});
  }
}
