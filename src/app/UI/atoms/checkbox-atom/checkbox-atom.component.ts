import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox-atom',
  templateUrl: './checkbox-atom.component.html',
  styleUrls: ['./checkbox-atom.component.css']
})
export class CheckboxAtomComponent {
  @Input() type:string;
  @Input() className:string;
  @Input() checked:boolean;
  @Input() name:string;
  @Input() label:string;
  @Input() id:string;
  @Input() groupName:FormGroup
  @Input() controlName:string

}
