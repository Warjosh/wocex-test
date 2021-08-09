import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  /**
   * 
   */
  private _loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor() {
  }

  /**
   * 
   * @returns 
   */
  public isLoading$(): BehaviorSubject<boolean> {
    return this._loading$;
  }

  /**
   * 
   * @returns 
   */
  public getLoading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  /**
   * 
   * @param _value 
   */
  public setLoading(_value: boolean): void {
    this._loading$.next(_value);
  }
}