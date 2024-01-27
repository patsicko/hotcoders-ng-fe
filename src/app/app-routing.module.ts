import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './UI/pages/about/about.component';
import { ContactComponent } from './UI/pages/contact/contact.component';
import { HomepageComponent } from './UI/pages/homepage/homepage.component';
import { BlogComponent } from './UI/pages/blog/blog.component';
import { SignupPageComponent } from './UI/pages/signup-page/signup-page.component';
import { LoginPageComponent } from './UI/pages/login-page/login-page.component';
import { AdminDashboardComponent } from './UI/pages/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  }
  ,
  {

    path:"about",
    component:AboutComponent
  },
  {
    path:"blog",
    component:BlogComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:'signup',
    component:SignupPageComponent
  },
  {
    path:'login',
    component:LoginPageComponent
  },
  {
    path:'admin-dashboard',
    component:AdminDashboardComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
