import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-button-atom',
  templateUrl: './button-atom.component.html',
  styleUrls: ['./button-atom.component.css']
})
export class ButtonAtomComponent implements OnInit{
 
  constructor(private authService:AuthService){}

  ngOnInit(): void {

    this.authService.isLoadingEvent.subscribe(value=>{
      this.isLoading=value
    })
   
  }
  @Input() btnValue:string
  @Input() className:string;
  @Input()  type:string
  @Input() groupName:FormGroup;
  @Input() disabled:boolean;
  @Input() isLoading:boolean=false;



}
