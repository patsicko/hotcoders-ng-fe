import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-atom',
  templateUrl: './text-atom.component.html',
  styleUrls: ['./text-atom.component.css']
})
export class TextAtomComponent {
@Input() text:string;
@Input() className:string;
}
