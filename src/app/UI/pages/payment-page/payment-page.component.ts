import { Component, Input, OnInit, Output } from '@angular/core';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from 'src/app/services/payment.service';
import { Router } from '@angular/router';

import { TInputProps } from '../../molecules/input-molecule/inputDTO';
import { Article } from 'src/app/models/article.model';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit{

  constructor( 
    private formBuilder:FormBuilder,
    private paymentService:PaymentService,
    private authService:AuthService
    ){}

    close=faX;
   @Input() blog:any;

    ngOnInit():void{
     
      this.paymentService.paymentEvent.subscribe((value)=>{
        console.log("emmited value as blog",value)
       
      this.blog=value
      })
    }
 
  phoneInput:TInputProps={
    type: 'text',
    placeholder: 'Ex: 078...',
    className: 'border rounded p-2  w-full',
    label: 'Your MOMO number',
    controlName: 'phone',
    
  }
 payForm=this.formBuilder.group({
  phone:[''],
 
 })

formData;

  closeForm(value:boolean){
 this.paymentService.closePaymentClicked(value)
  }

  submitForm(){
    this.authService.whenButtonClicked(true)

    this.formData=this.payForm.value;
    console.log("price",this.blog.blogPrice);
    console.log("phone",typeof(this.formData.phone))

     const clientData = {
      amount: this.blog.blogPrice,
      currency: 'EUR',
      externalId: '078',
      partyIdType: 'MSISDN',
      partyId: this.formData.phone,
      payerMessage: 'Your momo pay is successful',
      payeeNote:this.blog.blogTitle,
      payee: {
        partyIdType:'MSISDN', 
        partyId: '0784660905'
      }
    };

    this.paymentService.initiateMomoPayment(clientData).subscribe({
      next:(response)=>{
        console.log("momopayResponse",response);

       const userId=JSON.parse(localStorage.getItem('logedUser')).id;

       console.log('logedId',userId);

       this.paymentService.saveMomoPayment(userId,response).subscribe({
        next:(payedUser)=>{
          console.log("payed Uder",payedUser);

          this.paymentService.blogSubscription(userId,this.blog.id).subscribe({
            next:(response)=>{
              console.log("subscribed user",response)
            },
            error:(error)=>{
              console.log("subscription failed",error)
            }
          });

          this.paymentService.closePaymentClicked(false)

        },
        error:(error)=>{
          console.log("payment not saved",error)
        }
        
        
       })

      },
      error:(error)=>{
        console.log("momopay failed",error)
      }
    } 
    )


  }



}
