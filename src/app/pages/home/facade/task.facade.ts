import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { TaskState } from "../state/task.state";
import { Task } from "app/core/classes/task";
import { Router } from "@angular/router";


@Injectable({
    providedIn: 'root',
})
export class TaskFacade {

    constructor(
        private _taskState: TaskState,
        private _router: Router 
        /* private _alertService: AlertService, */
        
        /* private _util: UtilFacade, */
        /* private _loadingService: LoadingService */
    ) {
        this.setTasks([new Task("1", "tarea#1", "1", "Pending"), new Task("2", "tarea#2", "2", "Completed")]);
    }
    //#region State

    public getTasksValue(): Task[] {
        return this._taskState.getTasksValue();
    }

    public setTasks(tasks: Task[]): void {
        this._taskState.setCurrentTasks(tasks);
    }

    public getTaskValue(): Task {
        return this._taskState.getTaskValue();
    }

    public setTask(task: Task): void {
        this._taskState.setCurrentTask(task);
    }
    //#endregion

    //#region Service

    /** 
     * @param _user 
     */
    public addAndEditTask(id: string, task: Task): void{
        let aux = this.getTasksValue();

        if (id == '0'){
            let auxId = aux.length+1;
            let auxBool = false;
            do {
                auxBool = false;
                aux.forEach(element => {
                    if (element.id == auxId.toString()){
                        auxBool = true;
                        auxId = auxId+1;
                    }
                });
                
            }while (auxBool);


            task.id = (auxId).toString();
            aux.push(task);
            this.setTasks(aux);
        
            } else {
                aux.forEach(element => {
                    if (element.id == id ){
                        element = task;
                    }
                });
                this.setTasks(aux);
          }

          this._router.navigate(['/check-tasks']);
    }
    //#endregion

}