import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PayService {

  constructor(private http: HttpClient) {

  }
  pay(crediCard:any) {
    return this.http.post('http://host/api/pay', crediCard);
  }

}
