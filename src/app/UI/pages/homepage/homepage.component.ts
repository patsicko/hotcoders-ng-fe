import { AfterViewInit, Component, OnInit } from '@angular/core';
import { faX } from '@fortawesome/free-solid-svg-icons';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { PaymentService } from 'src/app/services/payment.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  

})
export class HomepageComponent implements OnInit{

  constructor(
   
    private socialAuthService: SocialAuthService,

    private paymentService:PaymentService
  ){}

  sentence='Hello there ! 🌎  Welcome to HotCoders !';
  displayedText='';
 
  welcome:boolean=false;
  fullAccessPrice:string="1600";
  price:string;
  showPaymentModel:boolean=false;
  close=faX;
  articles=JSON.parse(localStorage.getItem("articles"))


  ngOnInit(): void {
    this.animateText();
    this.paymentService.paymentEvent.subscribe((data)=>{
     
      this.showPaymentModel=true;
      this.price=data;

      this.paymentService.closePaymentEvent.subscribe((value)=>{
        this.showPaymentModel=value
      })
    })
    
  }
 
 



  animateText() {
    const sentenceArray = this.sentence.split('');
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      this.displayedText += sentenceArray[currentIndex];
      
      currentIndex++;
     
     
    

      if (currentIndex === sentenceArray.length) {
        this.welcome=true;
        clearInterval(intervalId);
       
        
      }
    }, 50); 
   
  }

 
  

}
