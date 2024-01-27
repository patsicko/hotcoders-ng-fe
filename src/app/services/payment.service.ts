
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  paymentEvent:EventEmitter<any>=new EventEmitter<any>();
  closePaymentEvent:EventEmitter<boolean>= new EventEmitter<any>();


  closePaymentClicked(value:boolean){
  this.closePaymentEvent.emit(value)
  }

  payButtonClicked(price:string){
    this.paymentEvent.emit(price)
  }

  initiateMomoPayment(clientData:any): Observable<any> {
   

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>('http://localhost:3000/momo-pay', clientData, { headers });
  }
}
