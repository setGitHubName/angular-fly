import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PayService {

  constructor( private http: HttpClient) {}
 items = [];
    getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  getPayMethod(product){
    alert (JSON.stringify(product)+"zhifubao");
  }
}