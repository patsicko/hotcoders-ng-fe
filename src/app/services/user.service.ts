import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignupData } from '../models/user.model';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  headers=new HttpHeaders({
    'Content-Type':'application/json'
  });
  
  getUsers():Observable<any>{



    return this.http.get<any>('http://localhost:8000/api/user/All',{headers:this.headers})
    
  }

 adminApprove(id):Observable<any>{
  return this.http.put<any>(`http://localhost:8000/api/user/${id}/admin-approval`,{headers:this.headers})
 }

 managerApprove(id):Observable<any>{
  return this.http.put<any>(`http://localhost:8000/api/user/${id}/manager-approval`,{headers:this.headers})
 }


 getLogedUser(id):Observable<any>{
  return this.http.get(`http://localhost:8000/api/user/${id}`,{headers:this.headers})
 }
}
