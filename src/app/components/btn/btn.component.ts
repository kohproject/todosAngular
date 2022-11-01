import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
  @Input() txt: string;
  @Input() bg: string;
  @Input() deleteStatus:Boolean;
  @Input() markStatus:Boolean;
  @Input() addTaskStatus:Boolean;
  @Input() btnShoStatus:Boolean;
  @Input() doneBool:Boolean;
 
  constructor() {
    this.txt ="";
    this.bg ="";
    this.doneBool = false;
    this.deleteStatus = false;
    this.markStatus = false;
    this.addTaskStatus = false;
    this.btnShoStatus = false;
    
   }

  ngOnInit(): void {
  }

}
