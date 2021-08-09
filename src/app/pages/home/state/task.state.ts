import { Injectable } from "@angular/core";
import { Task } from "app/core/classes/task";
import { BehaviorSubject, Observable } from "rxjs";


@Injectable()
export class TaskState {

  private _tasks$ = new BehaviorSubject<Task[]>(null);
  private _task$ = new BehaviorSubject<Task>(null);

  constructor() {

  }

  /**
   * 
   * @param _tasks[]
   */
  public setCurrentTasks(_tasks: Task[]) {
    this._tasks$.next(_tasks);
  }
  /**
 * 
 * @param _task 
 */
  public setCurrentTask(_task: Task) {
    this._task$.next(_task);
  }
  /**
   * 
   * @returns 
   */
  public geCurrentTasks(): Observable<Task[]> {
    return this._tasks$.asObservable();
  }
  /**
   * 
   * @returns 
   */
   public geCurrentTask(): Observable<Task> {
    return this._task$.asObservable();
  }
  /**
   * 
   * @returns 
   */
  public getTasksValue(): Task[] {
    return this._tasks$.getValue();
  }
  /**
   * 
   * @returns 
   */
   public getTaskValue(): Task {
    return this._task$.getValue();
  }
}
