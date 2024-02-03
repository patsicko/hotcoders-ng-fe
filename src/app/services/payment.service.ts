
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MomoPaymentResponse } from '../models/momopayment.model';
import { Article } from '../models/article.model';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  paymentEvent:EventEmitter<Article>=new EventEmitter<Article>();
  closePaymentEvent:EventEmitter<boolean>= new EventEmitter<any>();
  headers= new HttpHeaders({
    'Content-Type':'application/json'
  });


  closePaymentClicked(value:boolean){
  this.closePaymentEvent.emit(value)
  }

  payButtonClicked(blog:Article){
    this.paymentEvent.emit(blog)
  }

  initiateMomoPayment(clientData:any): Observable<any> {
   

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>('http://localhost:3000/momo-pay', clientData, { headers });
  }

  saveMomoPayment(userId:number,momoPayment:MomoPaymentResponse):Observable<any>{

   

    const url = 'http://localhost:8000/api/user/'+userId+'/momo-payment';
    return this.http.put(url, momoPayment, { headers:this.headers });
  }

 blogSubscription(userId:number,blogId:number):Observable<any>{
  const body={
    userId:userId,
    blogId:blogId
  }
  return this.http.post("http://localhost:8000/api/user-blog-subscription",body,{headers:this.headers})
 }

}
