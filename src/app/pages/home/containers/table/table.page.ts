import { Component, OnInit } from '@angular/core';
import { Task } from 'app/core/classes/task';
import { TaskFacade } from '../../facade/task.facade';


declare interface TableData {
  headerRow: string[];
  dataRows: Task[];
}

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.css']
})


export class TablePage implements OnInit {
  public tableData1: TableData;
  constructor(private _taskFacade: TaskFacade) { }

  ngOnInit() {

    this.tableData1 = {
      headerRow: ['#', 'Name', 'Description', 'Status', 'Actions'],
      dataRows: []
    };

    this.tableData1.dataRows = this._taskFacade.getTasksValue();
  }

  /*  */
  public edit(id: string):void {
    let task: Task;
    
    task = this.tableData1.dataRows.filter(function (task) {
      return task.id == id;
    })[0];

    this._taskFacade.setTask(task);
  }
  /*  */
  public remove(id: string):void {
    this.tableData1.dataRows = this.tableData1.dataRows.filter(function (task) {
      return task.id != id;
    });
    this._taskFacade.setTasks(this.tableData1.dataRows);
  }
}
