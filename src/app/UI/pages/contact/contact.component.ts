import { Component } from '@angular/core';
import { TInputProps } from '../../molecules/input-molecule/inputDTO';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  nameInput:TInputProps={
    type: 'text',
    placeholder: 'Names',
    className: 'border rounded p-2  w-full',
    label: 'Names',
    controlName: 'name',
    
  }

  emailInput:TInputProps={
    type: 'email',
    placeholder: 'Email',
    className: 'border rounded p-2  w-full',
    label: 'Email',
    controlName: 'email'
  }

  countryInput:TInputProps={
    type: 'text',
    placeholder: 'Country',
    className: 'border rounded p-2  w-full',
    label: 'Country',
    controlName: 'country'
  }

  cityInput:TInputProps={
    type: 'text',
    placeholder: 'City',
    className: 'border rounded p-2  w-full',
    label: 'City',
    controlName: 'city'
  }


  textInput:TInputProps={
    type: 'textarea',
    placeholder: 'add your message',
    className: 'rounded w-full p-2   h-60 ',
    label: 'Message',
    controlName: 'message'
  }

constructor(private formBuilder :FormBuilder,
  private toastr: ToastrService){}


  data=''
  myForm= this.formBuilder.group({
    name: [''],
    email:[''],
    
    address: this.formBuilder.group({
      country: [''],
      city:['']
    }),
    message:[''],
   
    
  })

  get addressForm() {
    return this.myForm.get('address') as FormGroup;
  }

 

  submitForm(){
    this.toastr.success('Your message sent successfully');
    // this.toastr.error('Your message not sent successfully');

    this.data=this.myForm.value.message

    console.log("data",this.myForm.value)
  }
  

QuillConfiguration = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],        
    ['blockquote', 'code-block'],
    [{ 'header': 1 }, { 'header': 2 }],               
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      
    [{ 'indent': '-1'}, { 'indent': '+1' }],         
    [{ 'direction': 'rtl' }],                       

    [{ 'size': ['small', false, 'large', 'huge'] }], 
    
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean'],                                       

    ['link', 'image', 'video']                        
  ]
};

}