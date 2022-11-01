import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {TaskInterface} from "../TaskInterface.js"
import {Todos} from '../data/todos';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  Todos:Array<TaskInterface> =[];

  constructor() { 
    this.Todos = Todos;
  }

  getTasks(): Observable<any>{
    const todos = of(this.Todos);
    return todos;
  }
}
