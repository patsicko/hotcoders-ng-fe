import { EventEmitter, Injectable } from '@angular/core';
import { LoginData, ManualUser, SignupData, User } from '../models/user.model';
import { SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { log } from 'node:util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  manualUsers:SignupData[]=[];
  socialUsers:SocialUser[]=[];
  headers=new HttpHeaders({
    'Content-Type':'application/json'
  });
  

 showSignupButtonEvent:EventEmitter<boolean>=new EventEmitter<boolean>();
 showSignupModelEvent:EventEmitter<boolean>=new EventEmitter<boolean>();

 showLoginButtonEvent:EventEmitter<boolean>=new EventEmitter<boolean>();
 showLoginModelEvent:EventEmitter<boolean>=new EventEmitter<boolean>();

 showHeaderEvent:EventEmitter<boolean>=new EventEmitter<boolean>();

 onSignupSuccessEvent:EventEmitter<SignupData[] | SocialUser[]> = new EventEmitter<SignupData[]>();

 onLoginSuccessEvent:EventEmitter<any> = new EventEmitter <any>();

 isLoadingEvent:EventEmitter<boolean>= new EventEmitter<boolean>();
 


whenButtonClicked(value){
  this.isLoadingEvent.emit(value);
}

 signupButtonClicked(value:boolean){
  this.showSignupModelEvent.emit(value);
 }

 loginButtonClicked(value:boolean){
  this.showLoginModelEvent.emit(value);
 }

 signupModelClosed(value:boolean){
  this.showSignupModelEvent.emit(value);
 }

 loginModelClosed(value:boolean){
  this.showLoginModelEvent.emit(value);
 }


 createManualUser(user:SignupData):Observable<any>{



return this.http.post<SignupData>('http://localhost:8000/api/user/createUser',user,{headers:this.headers}).pipe(
  tap(result=>{
 this.manualUsers.push(user);
 console.log(this.manualUsers);
this.onSignupSuccessEvent.emit(result);
this.showSignupModelEvent.emit(false);
this.showSignupButtonEvent.emit(false);
this.showLoginButtonEvent.emit(true)
  })
)
 }

 createSocialUser(user:SocialUser){
 this.socialUsers.push(user);
 console.log(this.socialUsers)
 this.onSignupSuccessEvent.emit(this.socialUsers);
 }
 
login(loginData:LoginData):Observable<any>{
  console.log("dataaaaaaaaaaaa",loginData)

return this.http.post<any>('http://localhost:8000/api/user/login',loginData,{headers:this.headers}).pipe(
  tap(response=>{
    console.log("response",response.user)
    this.onLoginSuccessEvent.emit(response.user);
   this.showLoginModelEvent.emit(false);
  })
)
}

}
