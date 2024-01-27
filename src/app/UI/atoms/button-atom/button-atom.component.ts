import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-button-atom',
  templateUrl: './button-atom.component.html',
  styleUrls: ['./button-atom.component.css']
})
export class ButtonAtomComponent {
  @Input() btnValue:string
  @Input() className:string;
  @Input()  type:string
  @Input() groupName:FormGroup;
  @Input() disabled:boolean

}
