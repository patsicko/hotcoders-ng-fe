import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { error } from 'console';
import { response } from 'express';
import { PaymentService } from 'src/app/services/payment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-text-molecule',
  templateUrl: './text-molecule.component.html',
  styleUrls: ['./text-molecule.component.css']
})
export class TextMoleculeComponent {
 



@Input() textHeader:string | null;
@Input() textClass:string;
@Input() text:string;

@Input() source:string;
@Input() alt:string;
@Input() imageClass:string;

@Input() imageContainerClass:string;
@Input() textHeaderClass:string;
@Input() textMoleculeClass:string;
@Input() price:string;

@Input() showImage: boolean = true;


constructor(private paymentService:PaymentService,private toastr: ToastrService){}

payCourse(price){
const logedUser= JSON.parse(localStorage.getItem("logedUser"));
console.log("logedin user",logedUser)
if(!logedUser){
  this.toastr.error("Login first !!!")
  
}else{
  this.paymentService.payButtonClicked(price);
}



}



}
