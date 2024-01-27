import { Component, Input, Output } from '@angular/core';
import { FormControl,FormGroup, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-input-atom',
  templateUrl: './input-atom.component.html',
  styleUrls: ['./input-atom.component.css']
})
export class InputAtomComponent {

  @Input() type:string;
  @Input() className:string;
  @Input() placeholder:string;
  @Input() label:string;
  @Input() controlName:string;
  @Input() groupName:FormGroup;
  

  

}
