import { Component, Input } from '@angular/core';
import { FormControl,FormGroup, FormGroupName } from '@angular/forms';
import { TInputProps } from './inputDTO';

@Component({
  selector: 'app-input-molecule',
  templateUrl: './input-molecule.component.html',
  styleUrls: ['./input-molecule.component.css']
})
export class InputMoleculeComponent {
@Input() inputProps:TInputProps;
@Input() groupName:FormGroup;
@Input() cols:string
@Input() rows:string;
@Input() quillConfigurationModule:QuillConfiguration;



}
