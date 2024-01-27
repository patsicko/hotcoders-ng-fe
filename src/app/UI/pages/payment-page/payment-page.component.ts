import { Component, Input, OnInit, Output } from '@angular/core';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from 'src/app/services/payment.service';
import { Router } from '@angular/router';

import { TInputProps } from '../../molecules/input-molecule/inputDTO';


@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit{

  constructor( 
    private formBuilder:FormBuilder,
    private paymentService:PaymentService
    ){}

    close=faX;
   @Input() price:string="50";

    ngOnInit():void{
     
      this.paymentService.paymentEvent.subscribe((value)=>{
       
      this.price=value
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


    this.formData=this.payForm.value;
    console.log("price",this.price);
    console.log("phone",typeof(this.formData.phone))

     const clientData = {
      amount: this.price,
      currency: 'EUR',
      externalId: '078',
      partyIdType: 'MSISDN',
      partyId: this.formData.phone,
      payerMessage: 'Your momo pay is successful',
      payeeNote: 'You can now access the course',
      payee: {
        partyIdType:'MSISDN', 
        partyId: '0784660905'
      }
    };

    this.paymentService.initiateMomoPayment(clientData).subscribe({
      next:(response)=>{
        console.log("momopayResponse",response)
      },
      error:(error)=>{
        console.log("momopay failed",error)
      }
    } 
    )


  }



}
