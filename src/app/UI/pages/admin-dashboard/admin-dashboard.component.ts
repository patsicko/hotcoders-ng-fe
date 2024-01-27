import { Component, OnInit } from '@angular/core';
import { faSearch,faBell,faUser,faFile } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent  implements OnInit{

  constructor(
    private adminService:AdminService
  ){}
  ngOnInit(): void {
    this.adminService.showArticleFormEvent.subscribe((value)=>{
      this.showArticleModel=value
    })
  }

showArticleModel:boolean=false;

search=faSearch;
notificationIcon=faBell;
userIcon=faUser;
fileIcon=faFile;



showArticleForm(value:boolean){
  this.showArticleModel=value;

}

showArticleList(){
  const articles=this.adminService.getArticles();

  console.log("articles got",articles)
}


}
