import { Component, OnInit} from '@angular/core';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-task-blocks',
  templateUrl: './task-blocks.component.html',
  styleUrls: ['./task-blocks.component.scss']
})

export class TaskBlocksComponent implements OnInit {
  newItmBool:Boolean = false;
  headTask:String;
  tasksArr:Array<any>;
  
  constructor(private taskService: TaskService ) { 
    this.newItmBool =false;
    this.headTask ="Tasks";
    this.tasksArr =[];
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((todos)=>{
      this.tasksArr = todos
    })
  }
  resetIndex(){
    this.tasksArr.map((task,index)=>{
      task.id = 'id'+index;
    })
  }

  deleteTask(id:String):void {
    this.tasksArr = this.tasksArr.filter(task => task.id !== id);
    this.resetIndex();
  }

  getCompleteBool(){
    return true;
  }

  getTaskLen(){
    return this.tasksArr.length;
  }

  addTaskItm(obj:Object){ 
    this.newItmBool =true;
    this.tasksArr.unshift(obj);
    if(this.getCompleteBool()){
      setTimeout(() =>{
        this.newItmBool = false;
      },1000)
    }
  }

}
