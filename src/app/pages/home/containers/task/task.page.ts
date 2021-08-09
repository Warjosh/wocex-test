import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'app/core/classes/task';
import { TaskFacade } from '../../facade/task.facade';

@Component({
  selector: 'app-user',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.css']
})
export class TaskPage implements OnInit {
  
  public readonly Type: string;
  public task: Task;

  constructor(
    private _route: ActivatedRoute,
    private _taskFacade: TaskFacade) {
      this.Type = this._route.snapshot.paramMap.get('type');
   }

  ngOnInit() {
    if (this.Type == '0'){
      this.task = new Task('0','','','');
    } else {
      this.task = this._taskFacade.getTaskValue();
    }
  }

  public submit(){
    this._taskFacade.addAndEditTask(this.Type, this.task);
  }
}
