import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textarea-atom',
  templateUrl: './textarea-atom.component.html',
  styleUrls: ['./textarea-atom.component.css']
})
export class TextareaAtomComponent {

  @Input() groupName:FormGroup;
  @Input() controlName:string;
  @Input() className:string;
  @Input() cols:string
  @Input() rows:string;
}
