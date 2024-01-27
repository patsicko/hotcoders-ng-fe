import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-atom',
  templateUrl: './image-atom.component.html',
  styleUrls: ['./image-atom.component.css']
})
export class ImageAtomComponent {
@Input() source:string | null;
@Input() alt:string;
@Input() className:string | null;
}
