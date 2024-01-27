import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { TemplatesModule } from '../templates/templates.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NewArticleComponent } from './new-article/new-article.component';
import { QuillModule } from 'ngx-quill';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [
    NewArticleComponent
  ],
  imports: [
    CommonModule,
    MoleculesModule,
    QuillModule,
    AtomsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports:[
    NewArticleComponent
  ]
})
export class OrganismsModule { }
