import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-routerlink',
  templateUrl: './routerlink.component.html',
  styleUrls: ['./routerlink.component.css']
})
export class RouterlinkComponent {
  @Input() route:string;
  @Input() linkText:string;
  @Input() linkClass:string;
  @Input() isActive:string;

}
