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

  formData:FormData;

constructor(
  private formBuilder:FormBuilder, 
  private toaster:ToastrService,
  private adminService:AdminService,

  ){}
  
 
closeArticleForm(value){
this.adminService.showArticleForm(value)
}

closeIcon=faX


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
  coverImage: [null],
  blogTitle:['',[Validators.required]],
  blogDescription:['',[Validators.required]],
  blogPrice:['',[Validators.required]],
  blogContent:['',[Validators.required]]
})

uploadImage(event: any) {
  const file = (event.target as HTMLInputElement).files[0];
 if(file){
  const reader = new FileReader();
  reader.onload=()=>{
    this.newArticle.patchValue({
      coverImage:reader.result
    });
  };
  reader.readAsDataURL(file)
 }
 
}

submitForm() {


//   this.formData = new FormData();
//   this.formData.append('coverImage', this.newArticle.get('coverImage').value);
//   this.formData.append('blogTitle', this.newArticle.get('blogTitle').value);
//   this.formData.append('blogDescription', this.newArticle.get('blogDescription').value);
//   this.formData.append('blogPrice', this.newArticle.get('blogPrice').value);
//   this.formData.append('blogContent', this.newArticle.get('blogContent').value);


// this.formData.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// });

// const imagesrc=this.getImageUrl(this.newArticle.get('coverImage').value)

// const article={
//   coverImage:this.newArticle.get('coverImage').value,
//   blogTitle:this.newArticle.get('blogTitle').value,
//   blogDescription: this.newArticle.get('blogDescription').value,
//   blogPrice:this.newArticle.get('blogPrice').value,
//   blogContent:this.newArticle.get('blogContent').value
// }


if(this.newArticle.valid){
  const formData = this.newArticle.value

  this.adminService.createArticle(formData as Article).subscribe({
    next:(response)=>{
      console.log("created article",response)
    },
    error:(error)=>{
      console.log("failed to create blog",error)
    }
  });

}



}



getImageUrl(fileOrString: File | string): string {
  if (fileOrString instanceof File) {
    return URL.createObjectURL(fileOrString);
  } else {
    return '';
  }
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
