import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextAtomComponent } from './text-atom/text-atom.component';
import { ImageAtomComponent } from './image-atom/image-atom.component';
import { RouterlinkComponent } from './routerlink/routerlink.component';
import { InputAtomComponent } from './input-atom/input-atom.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CheckboxAtomComponent } from './checkbox-atom/checkbox-atom.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextareaAtomComponent } from './textarea-atom/textarea-atom.component';
import { ButtonAtomComponent } from './button-atom/button-atom.component';
import { QuillInputAtomComponent } from './quill-input-atom/quill-input-atom.component';
import { QuillModule } from 'ngx-quill'





@NgModule({
  declarations:[
    TextAtomComponent,
    ImageAtomComponent,
    RouterlinkComponent,
    InputAtomComponent,
    CheckboxAtomComponent,
    TextareaAtomComponent,
    ButtonAtomComponent,
    QuillInputAtomComponent,
    

  ],

  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    QuillModule

  
  ],

  exports:[
    TextAtomComponent,
    ImageAtomComponent,
    RouterlinkComponent,
    InputAtomComponent,
    CheckboxAtomComponent,
    TextareaAtomComponent,
    ButtonAtomComponent,
    QuillInputAtomComponent
  ]
 
})
export class AtomsModule { }
