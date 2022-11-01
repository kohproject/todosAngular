import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})

export class AddTaskComponent implements OnInit {
  addTask:String;
  taskPriority:Number;
  openBool:Boolean;
  btnShoStatus:Boolean;
  linktxt:String;


  @Input() complete:Boolean = false;
  @Input() tlen:Number;
 
  @Output() EmitAddTask = new EventEmitter<any>();

  constructor() {
    this.tlen=0;
    this.addTask ='';
    this.taskPriority = 1;
    this.openBool =false;
    this.btnShoStatus = this.openBool;
    this.linktxt ="Add a new Task";
   }


  resetForm(){
    this.addTask="";
    this.taskPriority=1;
    this.openBool = !this.openBool;
  }

  openNewTask(){
    this.openBool = !this.openBool;
    this.btnShoStatus = this.openBool;
  //  this.linktxt = (this.openBool) ? "Close New Task" : "Add a new Task";
 }

  clicked() {

    if(this.addTask === ''){
      alert('please enter a new task');
      return;
    }

    let obj:Object ={
      id:'id'+this.tlen,
      name:this.addTask,
      importance:this.taskPriority,
      done:false
    }
    
    this.EmitAddTask.emit(obj);
    if(this.complete) this.resetForm();
  }
  
  ngOnInit(): void {
  }

}
