import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from 'app/core/classes/user';

@Injectable()
export class HomeGuards implements CanActivate {


  constructor(
    private _router: Router,
  ) { }

  canActivate() {

    return new Promise<boolean>(
      (resolve) => {
          if (localStorage.getItem('token') != null){
           
            let user = new User(JSON.parse(localStorage.getItem('token'))._email, JSON.parse(localStorage.getItem('token'))._password);

            if (user.password == '123456' && user.email == 'admin@gmail.com') {
              resolve(true);
            } else {
              this._router.navigate(['/log-in']);
              resolve(false);
            }
          } else {
            this._router.navigate(['/log-in']); 
            resolve(false);
          }

      }
    );
  }


}