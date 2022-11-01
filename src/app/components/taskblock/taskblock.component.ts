import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {TaskInterface} from "../../TaskInterface.js"
@Component({
  selector: 'app-taskblock',
  templateUrl: './taskblock.component.html',
  styleUrls: ['./taskblock.component.scss']
})

export class TaskblockComponent implements OnInit {
  @Input() todo:any;
  @Input() taskid:String;
  @Output() emitRemoveItm = new EventEmitter<{itm:TaskInterface}>();

  doneBool:Boolean;
  deleteStatus:Boolean;
  markStatus:Boolean;
  selectedId:String;
  
  constructor() { 
    this.doneBool = false;
    this.deleteStatus = false;
    this.markStatus =false;
    this.taskid='';
    this.selectedId='';
  }

  ngOnInit(): void {
  }

  getSure(id:String){
    return (id === this.selectedId) ? true : false;
  }

  getMarkText(){
    return (this.doneBool) ? "Reset" : "Mark as done";
  }

  shoRUsure(id:String){
    this.selectedId = id;
  }
 
  removeItm(itm:TaskInterface){
    this.emitRemoveItm.emit({itm});
  }

  toggleDone(){
   this.doneBool = !this.doneBool;
  }
  getDoneStatus(){
    return this.doneBool;
  }


}
