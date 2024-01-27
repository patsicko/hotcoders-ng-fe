import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSun,faMoon,faBars,faX,faBucket} from '@fortawesome/free-solid-svg-icons';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  socialUser: SocialUser;

  constructor(private socialAuthService: SocialAuthService, private authService:AuthService){}


sun=faSun
moon=faMoon
bar=faBars
close=faX

showFlex:boolean=false

  routeList=[
    {
      route:"/", linkClass:"text-md md:text-xl px-5 py-1 md:py-2 rounded-md  hover:bg-gray mx-4" , linkText:"Home"
    },
    {
      route:"/about", linkClass:"text-md md:text-xl px-5 py-1 md:py-2 rounded-md  hover:bg-dark-blue hover:bg-gray mx-4" ,linkText:"About"
    },
    {
      route:"/blog", linkClass:"text-md md:text-xl px-5 py-1 md:py-2 rounded-md mt-3 hover:bg-dark-blue hover:bg-gray mx-4" , linkText:"blog"
    },
    {
      route:"/contact", linkClass:"text-md md:text-xl px-5 py-1 md:py-2 rounded-md my-5 hover:bg-dark-blue hover:bg-gray mx-4" , linkText:"Contact"
    }
    
  ]

  isDark:boolean=false;
  @Output() toggleTheme:EventEmitter<boolean> = new EventEmitter<boolean>();
 
  @Input() logedIn=null;

  showSignupButton:boolean=true;

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.logedIn = user != null;
      this.showSignupButton=false;

      console.log(this.socialUser);
    });
    (error) => {
      console.error('Social login error:', error);
    } 

  this.authService.onLoginSuccessEvent.subscribe((user)=>{
    this.logedIn=user;
    this.showSignupButton=false;

  })
   
  }

  logOut(): void {
    if(this.socialUser){
      this.socialAuthService?.signOut();
    }
   
    this.logedIn=null;
  }

  showSignupForm(value:boolean){

    
    this.authService.signupButtonClicked(value)

  }

  showLoginForm(value:boolean){
   this.authService.loginButtonClicked(value);
  }
  
  changeTheme(){
    this.isDark=!this.isDark

    this.toggleTheme.emit(this.isDark)

  }


  toggleMenu(){
this.showFlex=!this.showFlex
  }



}
