import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService:AuthService, private router:Router){}

  ngOnInit(): void {
    this.authService.showSignupModelEvent.subscribe((value)=>{
      this.showModel=value;
    });

    this.authService.onSignupSuccessEvent.subscribe((data)=>{
      this.showLoginModel=true;

      
    })

    this.authService.showLoginModelEvent.subscribe((value)=>{
      this.showLoginModel=value;
    });

    this.authService.onLoginSuccessEvent.subscribe((user)=>{
      this.logedIn=user;
      if(this.logedIn.email==='admin@gmail.com'){
        this.router.navigate(['/admin-dashboard']);
        this.showHeader=false;
      }
    })
  }


  title = 'mybrand-ng-fe';

  isDark:boolean;
  logedIn=null;
  socialUser;

  

  showModel:boolean=false;
  showLoginModel:boolean=false;
  showHeader:boolean=true;

  
  changeTheme(theme:boolean){
  this.isDark=theme;

  }




}
