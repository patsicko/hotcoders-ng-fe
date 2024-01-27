import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quill-input-atom',
  templateUrl: './quill-input-atom.component.html',
  styleUrls: ['./quill-input-atom.component.css']
})
export class QuillInputAtomComponent {
  @Input() groupName:FormGroup;
  @Input() controlName:string;
  @Input() className:string;
  @Input() quillConfigurationModule:QuillConfiguration;
 
}
