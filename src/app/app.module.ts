import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomepageComponent } from './UI/pages/homepage/homepage.component';
import { HeaderComponent } from './UI/templates/header/header.component';
import { RouterlinkComponent } from './UI/atoms/routerlink/routerlink.component';
import { AboutComponent } from './UI/pages/about/about.component';
import { ContactComponent } from './UI/pages/contact/contact.component';
import { NavComponent } from './UI/molecules/nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BlogComponent } from './UI/pages/blog/blog.component';

import { ImageAtomComponent } from './UI/atoms/image-atom/image-atom.component';
import { InputAtomComponent } from './UI/atoms/input-atom/input-atom.component';
import { TextMoleculeComponent } from './UI/molecules/text-molecule/text-molecule.component';
import { PagesModule } from './UI/pages/pages.module';
import { TemplatesModule } from './UI/templates/templates.module';
import { ToastrModule } from 'ngx-toastr';
import { QuillModule } from 'ngx-quill';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
    declarations: [
    AppComponent,
        
        
  
   
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        
        BrowserAnimationsModule,
        MatSlideToggleModule,
        
        PagesModule,
        AppRoutingModule,
        HttpClientModule,
       
        TemplatesModule,
        ToastrModule.forRoot({
            timeOut: 2000,
            positionClass: 'toast-top-right',
            preventDuplicates: true,
          }),
        QuillModule.forRoot()
       
       
    ],
    exports:[
        
    ]
})
export class AppModule { }
