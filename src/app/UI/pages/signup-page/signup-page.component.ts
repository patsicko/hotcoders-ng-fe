import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { faX } from '@fortawesome/free-solid-svg-icons';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TInputProps } from '../../molecules/input-molecule/inputDTO';
import { AuthService } from 'src/app/services/auth.service';
import { ManualUser,SignupData } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { error } from 'console';

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
    private authService:AuthService,
    private userService:UserService
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
  phoneInput:TInputProps={
    type: 'text',
    placeholder: 'ex:078...',
    className: 'border rounded p-2  w-full',
    label: 'Phone',
    controlName: 'phone',
    
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
  phone:['',[Validators.required]],
  email:['',[Validators.required, Validators.email]],
  password:['',[Validators.required]]
 })

formData:SignupData

  ngOnInit() {
   
  }

  closeForm(value:boolean){
 

  this.authService.signupModelClosed(value);
  
  }

  submitForm(){
    this.authService.whenButtonClicked(true)
    this.formData=this.signupForm.value as SignupData;
    // console.log(this.formData);
    // localStorage.setItem("user",JSON.stringify(this.formData));
  this.authService.createManualUser(this.formData).subscribe({
    next:(response)=>{
      console.log("response",response)
    },
    error:(error)=>{
      console.log(
        error
      )
    }
  });

  }
}
