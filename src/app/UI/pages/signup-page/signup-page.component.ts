import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { faX } from '@fortawesome/free-solid-svg-icons';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TInputProps } from '../../molecules/input-molecule/inputDTO';
import { AuthService } from 'src/app/services/auth.service';
import { ManualUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent  implements OnInit{
  
  close=faX;
  // @Output() closeSignupFormEvent:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService
  ){}

  firstNameInput:TInputProps={
    type: 'text',
    placeholder: 'First name',
    className: 'border rounded p-2  w-full',
    label: 'First name',
    controlName: 'firstName',
    
  }
  laststNameInput:TInputProps={
    type: 'text',
    placeholder: 'Last name',
    className: 'border rounded p-2  w-full',
    label: 'Lastst name',
    controlName: 'lastName',
    
  }

  emailInput:TInputProps={
    type: 'email',
    placeholder: 'email',
    className: 'border rounded p-2  w-full',
    label: 'Email',
    controlName: 'email',
    
  }

  passwordInput:TInputProps={
    type: 'password',
    placeholder: 'Password',
    className: 'border rounded p-2  w-full',
    label: 'Password',
    controlName: 'password',
    
  }

 signupForm=this.formBuilder.group({
  firstName:['',[Validators.required]],
  lastName:['',[Validators.required]],
  email:['',[Validators.required, Validators.email]],
  password:['',[Validators.required]]
 })

formData:ManualUser

  ngOnInit() {
   
  }

  closeForm(value:boolean){
 

  this.authService.signupModelClosed(value);
  
  }

  submitForm(){
    this.formData=this.signupForm.value as ManualUser;
    console.log(this.formData);
    localStorage.setItem("user",JSON.stringify(this.formData));
    this.authService.createManualUser(this.formData);
   

  }

  
 
 

 
}
