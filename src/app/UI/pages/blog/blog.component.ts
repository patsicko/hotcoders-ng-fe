import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogSubscriptions: any[]=[];
  selectedBlog:any={}

  ngOnInit(): void {
   const logedUser= JSON.parse(localStorage.getItem("logedUser"));
   if(logedUser.blogSubscriptions){
    this.blogSubscriptions=logedUser.blogSubscriptions;

    console.log("blog subscriptions for a loged user",this.blogSubscriptions);

   }
  }

  select(blog){
this.selectedBlog=blog
console.log("selected blog", this.selectedBlog)
  }

}
