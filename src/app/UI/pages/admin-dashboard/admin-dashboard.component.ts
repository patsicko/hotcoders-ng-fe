import { Component, OnInit,OnDestroy } from '@angular/core';
import { faSearch,faBell,faUser,faFile,faHome } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { error } from 'console';
import { ToastrService } from 'ngx-toastr';
import { interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent  implements OnInit ,OnDestroy{

  constructor(
    private adminService:AdminService,
    private userService:UserService,
    private toast:ToastrService,
    private router:Router,
    private authService:AuthService
  ){}

  ngOnDestroy(): void {
    this.stopPolling();
  }

  users=[]
  pollingSubscription: Subscription;
 
  ngOnInit(): void {
    this.startPolling();
    this.adminService.showArticleFormEvent.subscribe((value)=>{
      this.showArticleModel=value;

      this.userService.getUsers().subscribe({
        next:(response)=>{
          this.users=response
       
        },
        error:(error)=>{
          console.log("error",error)
        }
      })
    })
  }

  startPolling(): void {
    this.pollingSubscription = interval(3000) 
      .subscribe(() => {
        this.getUsers();
      });
  }

  stopPolling(): void {
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe();
    }
  }

showArticleModel:boolean=false;

search=faSearch;
notificationIcon=faBell;
userIcon=faUser;
fileIcon=faFile;
home=faHome

showArticleForm(value:boolean){
  this.showArticleModel=value;

}

showArticleList(){
  const articles=this.adminService.getArticles();

  console.log("articles got",articles)
}

getUsers(){

this.userService.getUsers().subscribe({
  next:(response)=>{            
    this.users=response
   
  },
  error:(error)=>{
    console.log("error",error)
  }
})
}

logedUser=JSON.parse(localStorage.getItem('logedUser'))

adminApprove(id){
if(this.logedUser.role=='admin'){
  this.userService.adminApprove(id).subscribe({
    next:(response)=>{
      
    },
    error:(error)=>{
      throw new Error("approval failed",error)
    }
  })
}else{
this.toast.error('Only admin will aproave this')
}
}



managerApproval(id){
  if(this.logedUser.role=='manager'){
    this.userService.managerApprove(id).subscribe({
      next:(response)=>{
        
      }
    })
  }
  else{
    this.toast.error('Only manager will approve')
  }
}


goHome(){
 
  this.router.navigate(['/'])
}

logout(){
  this.authService.showHeaderEvent.emit(true);
  localStorage.removeItem("logedUser");
  this.router.navigate(['/']);
 
  
  
}
}
