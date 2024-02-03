import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { error } from 'console';
import { response } from 'express';
import { PaymentService } from 'src/app/services/payment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/models/article.model';
import { AuthService } from 'src/app/services/auth.service';
import { AdminService } from 'src/app/services/admin.service';


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
@Input() blog:Article;

blogs:Article[]=[];
isLoading:boolean=false;


@Input() showImage: boolean = true;


constructor(
  private paymentService:PaymentService,
  private toastr: ToastrService,
  private authService:AuthService,
  private adminService:AdminService
  ){}

payCourse(blogTitle:string){
  this.authService.whenButtonClicked(true)
const logedUser= JSON.parse(localStorage.getItem("logedUser"));




if(!logedUser){
  this.toastr.error("Login first !!!")
  
}else{

  this.adminService.getArticles().subscribe({
    next:(response)=>{
      if(response){
        this.blogs=response;

        const blog=response.find(blog=>blog.blogTitle==blogTitle)

        this.paymentService.payButtonClicked(blog);
      }
    }
  })
  
 
}



}



}
