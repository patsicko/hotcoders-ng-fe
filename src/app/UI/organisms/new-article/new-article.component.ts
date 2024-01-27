import { Component, OnInit } from '@angular/core';
import { TInputProps } from '../../molecules/input-molecule/inputDTO';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { AdminService } from 'src/app/services/admin.service';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent  {

constructor(
  private formBuilder:FormBuilder, 
  private toaster:ToastrService,
  private adminService:AdminService,

  ){}
  
 
closeArticleForm(value){
this.adminService.showArticleForm(value)
}

closeIcon=faX

coverPhotoInput:TInputProps={


    type: 'file',
    placeholder: 'Cover image',
    className: 'border-4 h-14 text-2xl rounded-lg p-2  w-full',
    label: 'Cover Image',
    controlName: 'coverImage',
    
  }

  blogTitleInput:TInputProps={
  
    type: 'text',
    placeholder: 'Blog Title',
    className: 'border-4 h-14 text-2xl rounded-lg p-2  w-full',
    label: 'Blog Title',
    controlName: 'blogTitle',
    
  }

  blogDescription:TInputProps={
  
    type: 'text',
    placeholder: 'Description',
    className: 'border-4 h-14 text-2xl rounded-lg p-2  w-full',
    label: 'Description',
    controlName: 'blogDescription',
    
  }

  blogPrice:TInputProps={
  
    type: 'text',
    placeholder: 'Blog Price',
    className: 'border-4 h-14 text-2xl rounded-lg p-2  w-full',
    label: 'Blog Price',
    controlName: 'blogPrice',
    
  }

  blogContent:TInputProps={
  
    type: 'textarea',
    placeholder: 'contents here...',
    className: ' rounded p-2  w-full quill h-40 ',
    label: 'Contents',
    controlName: 'blogContent',
    
  }


newArticle=this.formBuilder.group({
  coverImage:[''],
  blogTitle:['',[Validators.required]],
  blogDescription:['',[Validators.required]],
  blogPrice:['',[Validators.required]],
  blogContent:['',[Validators.required]]
})


submitForm(){

console.log('clicked')
  
  this.adminService.createArticle(this.newArticle.value as Article)

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
