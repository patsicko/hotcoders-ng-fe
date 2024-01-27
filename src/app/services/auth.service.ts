import { EventEmitter, Injectable } from '@angular/core';
import { LoginData, ManualUser, User } from '../models/user.model';
import { SocialUser } from '@abacritt/angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  manualUsers:ManualUser[]=[];
  socialUsers:SocialUser[]=[];

 showSignupButtonEvent:EventEmitter<boolean>=new EventEmitter<boolean>();
 showSignupModelEvent:EventEmitter<boolean>=new EventEmitter<boolean>();

 showLoginButtonEvent:EventEmitter<boolean>=new EventEmitter<boolean>();
 showLoginModelEvent:EventEmitter<boolean>=new EventEmitter<boolean>();

 showHeaderEvent:EventEmitter<boolean>=new EventEmitter<boolean>();

 onSignupSuccessEvent:EventEmitter<ManualUser[] | SocialUser[]> = new EventEmitter<ManualUser[] | ManualUser[]>();

 onLoginSuccessEvent:EventEmitter<ManualUser> = new EventEmitter <ManualUser>();
 


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


 createManualUser(user:ManualUser){
  this.manualUsers.push(user);
 console.log(this.manualUsers);
  this.onSignupSuccessEvent.emit(this.manualUsers);
  this.showSignupModelEvent.emit(false);
 }

 createSocialUser(user:SocialUser){
 this.socialUsers.push(user);
 console.log(this.socialUsers)
 this.onSignupSuccessEvent.emit(this.socialUsers);
 }
 

async login(loginData:LoginData){

  console.log("loginData",loginData);
  console.log("stored data",this.manualUsers)
 const user= await this.manualUsers.find(manualUser=>{
   return manualUser.email===loginData.email && manualUser.password === loginData.password
 })
console.log("user found",user)
 if(user){
 this.onLoginSuccessEvent.emit(user);
 this.showLoginModelEvent.emit(false);
 }else{
  alert("Invalid credentials")
 }
 

}

}
