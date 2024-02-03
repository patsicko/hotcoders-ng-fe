import { AfterViewInit, Component, OnInit } from '@angular/core';
import { faX } from '@fortawesome/free-solid-svg-icons';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { PaymentService } from 'src/app/services/payment.service';
import { Article } from 'src/app/models/article.model';
import { AdminService } from 'src/app/services/admin.service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  

})
export class HomepageComponent implements OnInit{

  constructor(
   
    private socialAuthService: SocialAuthService,

    private paymentService:PaymentService,
    private adminService:AdminService
  ){}

  sentence='Hello there ! 🌎  Welcome to HotCoders !';
  displayedText='';
 
  welcome:boolean=false;
  
  blog:Article={
    coverImage:'image',
    blogTitle:'string',
    blogPrice:'1600',
    blogDescription:'string',
    blogContent:'string',
  }

  blogs:Article[]=[]


  // articles:any=[]
  showPaymentModel:boolean=false;
  close=faX;
  
 


  ngOnInit(): void {
    this.animateText();
    this.paymentService.paymentEvent.subscribe((blog)=>{
     
      this.showPaymentModel=true;
      this.blog=blog;

      this.paymentService.closePaymentEvent.subscribe((value)=>{
        this.showPaymentModel=value
      })
    })


    this.adminService.getArticles().subscribe({
      next:(result)=>{
      if(result){

        console.log("blogs got",result)
        this.blogs=result

       
      }
      },
      error:(error)=>{
        console.log("failed to get blogs")
      }
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
