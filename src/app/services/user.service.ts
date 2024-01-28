import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignupData } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  createUser(signupData:SignupData):Observable<any>{

    const headers= new HttpHeaders({
      'Content-Type':"aplication/json"
    });
 return this.http.post<SignupData>('http://localhost:8000/api/user/createUser',signupData,{headers})
  }
}
